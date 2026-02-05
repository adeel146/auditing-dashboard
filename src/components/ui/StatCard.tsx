import type { ReactNode } from "react";

export interface StatCardProps {
  value: string | number;
  label: string;
  icon?: ReactNode;
  iconColor?: string;
  iconBgColor?: string;
}

export default function StatCard({
  value,
  label,
  icon,
  iconColor = "text-error",
  iconBgColor,
}: StatCardProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 flex items-start justify-between">
      <div className="space-y-2">
        <div className="text-2xl font-bold text-primary">{value}</div>
        <div className="text-xs text-secondary">{label}</div>
      </div>
      {icon && (
        <div
          className={`${iconBgColor ? `${iconBgColor} p-2 rounded-lg` : ""} ${iconColor}`}
        >
          {icon}
        </div>
      )}
    </div>
  );
}
