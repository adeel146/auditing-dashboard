interface ProgressBarProps {
  value: number;
  className?: string;
  showLabel?: boolean;
}

export default function ProgressBar({ value, className = '', showLabel = false }: ProgressBarProps) {
  return (
    <div className={`w-full ${className}`}>
      <div className="h-3.5 bg-[#f5f8fb] rounded-xl overflow-hidden">
        <div
          className="h-full bg-success rounded-xl transition-all duration-500"
          style={{ width: `${Math.min(100, value)}%` }}
        />
      </div>
      {showLabel && (
        <div className="text-right text-xs text-secondary mt-1">{value.toFixed(1)}%</div>
      )}
    </div>
  );
}
