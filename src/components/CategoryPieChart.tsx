// src/components/CategoryPieChart.tsx
import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { type SalesDataItem } from '../data/dashboardData';

interface CategoryPieChartProps {
  data: SalesDataItem[];
}

// Use colors that align with your theme, maybe from tailwind.config.js's accent colors
// Or define a set of distinct, appealing colors
const COLORS = ['#6366f1', '#22c55e', '#a855f7', '#ef4444', '#f97316', '#eab308']; // Example: Primary-500, Green, Purple, Red, Orange, Yellow

const CategoryPieChart: React.FC<CategoryPieChartProps> = ({ data }) => {
  const aggregatedData = useMemo(() => {
    const categoryMap = new Map<string, number>();

    data.forEach(item => {
      const currentSales = categoryMap.get(item.category) || 0;
      categoryMap.set(item.category, currentSales + item.sales);
    });

    return Array.from(categoryMap.entries()).map(([category, sales]) => ({
      name: category,
      value: sales,
    }));
  }, [data]);

  if (!data || data.length === 0 || aggregatedData.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
        No sales data available for categories in this selection.
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={aggregatedData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8" // This fill will be overridden by Cell fills
          dataKey="value"
          label={({ name, percent }) => {
            if (typeof percent === 'number') {
              return `${name} (${(percent * 100).toFixed(0)}%)`;
            }
            return `${name}`;
          }}
          isAnimationActive={true}
        >
          {aggregatedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value: number) => `₹${value.toLocaleString()}`} />
        <Legend layout="horizontal" align="center" verticalAlign="bottom" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CategoryPieChart;