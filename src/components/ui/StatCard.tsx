import type { ReactNode } from 'react';

interface StatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
}

export default function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 flex items-start gap-3">
      {icon && (
        <div className="text-info">{icon}</div>
      )}
      <div>
        <div className="text-2xl font-bold text-primary">{value}</div>
        <div className="text-sm text-secondary capitalize">{label}</div>
      </div>
    </div>
  );
}
