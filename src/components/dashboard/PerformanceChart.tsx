import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { monthlyPerformance } from '../../data/mockData';

export default function PerformanceChart() {
  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <h3 className="text-base font-bold text-primary mb-4">12-Month Performance</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyPerformance} barCategoryGap="20%">
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8597A8', fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8597A8', fontSize: 12 }}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]}>
              {monthlyPerformance.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="url(#barGradient)"
                />
              ))}
            </Bar>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
                <stop offset="100%" stopColor="#0078D7" stopOpacity={0.3} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
