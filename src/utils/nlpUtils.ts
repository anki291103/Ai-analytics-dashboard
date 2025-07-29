// src/utils/nlpUtils.ts

// Define a type for the parsed query results
export interface ParsedQuery {
  metric?: 'sales' | 'users' | 'growth' | 'anomalies' | 'top_category' | 'prediction';
  timeframe?: string; // e.g., 'last7', 'last30', 'june', 'all', 'next_quarter'
  category?: string; // e.g., 'fashion', 'electronics', 'clothing', 'all'
  originalQuery: string;
  responseInsight?: string; // An insight generated directly from the query
  action?: 'filter' | 'display_insight'; // What action the dashboard should take
}

/**
 * A simplified NLP parser that interprets common user queries.
 * This is rule-based and can be expanded for more complexity.
 * @param query The user's natural language query.
 * @returns ParsedQuery object with recognized parameters and an action.
 */
export const parseNaturalLanguageQuery = (query: string): ParsedQuery => {
  const lowerQuery = query.toLowerCase();
  const parsed: ParsedQuery = { originalQuery: query, action: 'display_insight' }; // Default action

  // --- Identify Timeframes ---
  if (lowerQuery.includes('last 7 days') || lowerQuery.includes('past week')) {
    parsed.timeframe = 'last7';
    parsed.action = 'filter';
  } else if (lowerQuery.includes('last 30 days') || lowerQuery.includes('past month')) {
    parsed.timeframe = 'last30';
    parsed.action = 'filter';
  } else if (lowerQuery.includes('june')) {
    parsed.timeframe = 'june';
    parsed.action = 'filter';
  } else if (lowerQuery.includes('all time') || lowerQuery.includes('all data')) {
    parsed.timeframe = 'all';
    parsed.action = 'filter';
  } else if (lowerQuery.includes('next quarter') || lowerQuery.includes('next 3 months') || lowerQuery.includes('future sales')) {
    parsed.timeframe = 'next_quarter'; // Custom timeframe for predictions
    parsed.metric = 'prediction';
    parsed.action = 'display_insight'; // Or could set specific filter for this
  }

  // --- Identify Categories ---
  if (lowerQuery.includes('fashion')) {
    parsed.category = 'Clothing'; // Map to actual data category
    parsed.action = 'filter';
  } else if (lowerQuery.includes('electronics')) {
    parsed.category = 'Electronics'; // Map to actual data category
    parsed.action = 'filter';
  } else if (lowerQuery.includes('home')) {
    parsed.category = 'Home'; // Map to actual data category (if you add it)
    parsed.action = 'filter';
  } else if (lowerQuery.includes('all categories')) {
    parsed.category = 'all';
    parsed.action = 'filter';
  }

  // --- Identify Metrics / Specific Queries ---
  if (lowerQuery.includes('sales')) {
    parsed.metric = 'sales';
    if (!parsed.action || parsed.action === 'display_insight') parsed.action = 'filter'; // If no timeframe/category, default to filter
  }
  if (lowerQuery.includes('users') || lowerQuery.includes('engagement')) {
    parsed.metric = 'users';
    if (!parsed.action || parsed.action === 'display_insight') parsed.action = 'filter';
  }
  if (lowerQuery.includes('growth')) {
    parsed.metric = 'growth';
    if (!parsed.action || parsed.action === 'display_insight') parsed.action = 'filter';
  }
  if (lowerQuery.includes('anomalies') || lowerQuery.includes('unusual')) {
    parsed.metric = 'anomalies';
    parsed.action = 'display_insight'; // This will trigger a specific anomaly insight
  }
  if (lowerQuery.includes('top performing') || lowerQuery.includes('best category')) {
    parsed.metric = 'top_category';
    parsed.action = 'display_insight'; // This will trigger a specific top category insight
  }
  if (lowerQuery.includes('predicted') || lowerQuery.includes('forecast')) {
    parsed.metric = 'prediction';
    parsed.action = 'display_insight';
  }

  // --- Generate specific insight responses if needed (for actions other than just filtering) ---
  if (parsed.action === 'display_insight') {
      if (parsed.metric === 'anomalies') {
          parsed.responseInsight = "Checking for sales anomalies. Please see the 'AI-Generated Insights' box for details and the sales chart for visual cues.";
      } else if (parsed.metric === 'top_category') {
          parsed.responseInsight = "Analyzing top-performing categories. Results will appear in the 'AI-Generated Insights' box.";
      } else if (parsed.metric === 'prediction' && parsed.timeframe === 'next_quarter') {
          parsed.responseInsight = "Forecasting sales for the next quarter. View the 'Sales Over Time & Prediction' chart for trends.";
      } else {
          // Generic response if just a metric or general question without explicit filter needs
          parsed.responseInsight = `Analyzing ${parsed.metric || 'data'} for ${parsed.timeframe || 'the selected period'} and ${parsed.category || 'all categories'}. See charts and insights.`;
      }
  }


  return parsed;
};