// src/components/InsightsBox.tsx
import React from 'react';
import { FaLightbulb, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

interface InsightItem {
  type: 'info' | 'recommendation' | 'alert';
  text: string;
  action?: string;
  onActionClick?: () => void;
}

interface InsightProps {
  insights: InsightItem[];
}

const InsightsBox: React.FC<InsightProps> = ({ insights }) => {
  return (
    <div className="bg-gradient-to-r from-primary-500 to-accent-purple text-white rounded-xl p-6 shadow-2xl
                transform hover:scale-[1.01] transition-all duration-300 ease-in-out cursor-default
                relative overflow-hidden"> {/* Added overflow-hidden for pseudo-elements */}
        {/* Subtle background overlay/pattern for more texture */}
        <div className="absolute inset-0 opacity-10 bg-dots pattern-white dark:bg-dots dark:pattern-gray-900"></div>

      <h2 className="text-xl font-bold mb-4 flex items-center relative z-10">
        <span className="mr-2 text-2xl">💡</span> AI-Generated Insights & Recommendations
      </h2>
      <ul className="space-y-3 relative z-10">
        {insights.map((item, index) => (
          <li key={index} className={`text-sm p-3 rounded-lg backdrop-filter backdrop-blur-sm
            flex items-start space-x-3 transition-all duration-200 ease-in-out transform hover:scale-[1.01]
            ${item.type === 'info' ? 'bg-white/15 border border-white/20' : ''}
            ${item.type === 'recommendation' ? 'bg-accent-green/30 border border-accent-green/40' : ''}
            ${item.type === 'alert' ? 'bg-accent-red/30 border border-accent-red/40' : ''}
          `}>
            {item.type === 'info' && <FaLightbulb className="flex-shrink-0 mt-0.5 text-lg text-indigo-200" />}
            {item.type === 'recommendation' && <FaCheckCircle className="flex-shrink-0 mt-0.5 text-lg text-green-300" />}
            {item.type === 'alert' && <FaExclamationCircle className="flex-shrink-0 mt-0.5 text-lg text-red-300" />}
            <div className="flex-grow">
              <p>{item.text}</p>
              {item.action && item.onActionClick && (
                <button
                  onClick={item.onActionClick}
                  className="mt-2 text-xs font-semibold py-1 px-3 rounded-full border border-white text-white hover:bg-white hover:text-primary-600 transition-colors shadow-sm"
                >
                  {item.action}
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InsightsBox;