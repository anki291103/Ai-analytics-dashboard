// src/components/SalesLineChart.tsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, type DotProps
} from 'recharts';

// Interface for sales data, including the anomaly flag
interface SalesDataItem {
  date: string;
  sales: number;
  users: number;
  category: string;
  platform: string;
  isAnomaly?: boolean;
}

// Interface for prediction data points, which can also include anomaly info
interface PredictionDataPoint {
  date: string;
  sales: number | null;
  isPrediction: boolean;
  isAnomaly?: boolean; // This is added because the combined data might have it
}

// Extend DotProps to include payload which contains our data point.
// This is crucial for TypeScript to understand what 'payload' is.
// We also add a custom click handler specific to our data type.
interface CustomDotProps extends DotProps {
  payload?: PredictionDataPoint; // Make payload optional as per Recharts behavior, but define its type
  onDotClick?: (data: PredictionDataPoint) => void; // A new prop for our custom click handler
}

// Custom dot component to highlight anomalies and handle clicks
const CustomDot: React.FC<CustomDotProps> = (props) => {
  const { cx, cy, stroke, payload, onDotClick } = props;

  // Handle cases where cx or cy might be undefined (e.g., if dot is not rendered)
  // or if payload is unexpectedly missing.
  if (cx === undefined || cy === undefined || !payload) {
    return null;
  }

  // Handle click on the dot
  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent any parent click handlers from firing (e.g., if LineChart had one)
    if (onDotClick) {
      onDotClick(payload); // Pass only the payload (our data point)
    }
  };

  if (payload.isAnomaly) {
    return (
      <svg
        x={cx - 8}
        y={cy - 8}
        width={16}
        height={16}
        fill="red"
        viewBox="0 0 1024 1024"
        onClick={handleClick} // Attach click handler here
        style={{ cursor: 'pointer' }} // Indicate clickable
      >
        {/* Using a simple warning/exclamation icon path */}
        <path d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zm0 896c-212.04 0-384-171.96-384-384s171.96-384 384-384 384 171.96 384 384-171.96 384-384 384zM470.4 256h81.2v384h-81.2v-384zM470.4 704h81.2v81.2h-81.2v-81.2z" fill="#ff0000" />
      </svg>
    );
  }
  // Otherwise, render a standard circle dot
  return (
    <circle
      cx={cx}
      cy={cy}
      r={4}
      fill={stroke}
      onClick={handleClick} // Attach click handler here
      style={{ cursor: 'pointer' }} // Indicate clickable
    />
  );
};


interface SalesLineChartProps {
  data: SalesDataItem[]; // Actual historical data (can include isAnomaly)
  predictionData: PredictionDataPoint[]; // Combined historical + prediction data
  onDataPointClick: (data: PredictionDataPoint) => void; // Callback for data point clicks
}

const SalesLineChart: React.FC<SalesLineChartProps> = ({ data, predictionData, onDataPointClick }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={predictionData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        // The LineChart itself doesn't need an onClick here, as dots handle it.
        // If you wanted a click on the chart background to do something, you'd add it here.
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(dateStr) => new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: '2-digit' })}
        />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip
          cursor={{ strokeDasharray: '3 3' }}
          formatter={(value, name, props) => [`₹${(value as number).toLocaleString()}`, name === 'sales' ? 'Sales' : 'Predicted Sales']}
          labelFormatter={(label) => `Date: ${new Date(label).toLocaleDateString()}`}
        />
        <Legend />
        {/* Actual Sales Line - use 'predictionData' here, filtered to only show actual points.
            Pass the onDataPointClick handler to the CustomDot component. */}
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#4f46e5" // Blue
          strokeWidth={3}
          // The 'dot' prop expects either a boolean or a React element/function.
          // When passing a component, Recharts will inject the necessary DotProps.
          // We provide our CustomDot component, passing our specific handler to it.
          dot={(props) => <CustomDot {...props} onDotClick={onDataPointClick} />}
          activeDot={{ r: 8 }}
          name="Actual Sales"
          isAnimationActive={false} // Disable animation for actual data if prediction is animated
          // Filter to only display actual data points on this line
          data={predictionData.filter(d => !d.isPrediction)}
        />
        {/* Predicted Sales Line */}
        <Line
          type="monotone"
          dataKey="sales"
          stroke="#ef4444" // Red for prediction
          strokeWidth={2}
          strokeDasharray="5 5" // Dotted line for prediction
          dot={false} // No dots for prediction line on this line
          name="Predicted Sales"
          // Filter to only display prediction data points on this line
          data={predictionData.filter(d => d.isPrediction)}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;