interface CircularProgressProps {
  value: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
  className?: string;
  color?: string;
  trackColor?: string;
  semiCircle?: boolean;
}

export default function CircularProgress({
  value,
  size = 80,
  strokeWidth = 8,
  showLabel = true,
  className = "",
  color = "text-success",
  trackColor = "text-border",
  semiCircle = false,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;

  if (semiCircle) {
    // Semi-circle (half circle) mode
    const semiCircumference = radius * Math.PI; // Half of full circumference
    const offset = semiCircumference - (value / 100) * semiCircumference;
    const height = size / 2 + strokeWidth;

    return (
      <div
        className={`relative ${className}`}
        style={{ width: size, height: height }}
      >
        <svg width={size} height={height} style={{ overflow: "visible" }}>
          {/* Background semi-circle */}
          <path
            d={`M ${strokeWidth / 2}, ${size / 2} A ${radius}, ${radius} 0 0 1 ${size - strokeWidth / 2}, ${size / 2}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={trackColor}
          />
          {/* Progress semi-circle */}
          <path
            d={`M ${strokeWidth / 2}, ${size / 2} A ${radius}, ${radius} 0 0 1 ${size - strokeWidth / 2}, ${size / 2}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={`${color} transition-all duration-500`}
            style={{
              strokeDasharray: semiCircumference,
              strokeDashoffset: offset,
            }}
          />
        </svg>
        {showLabel && (
          <div
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: "50%",
              bottom: 0,
              transform: "translateX(-50%)",
            }}
          >
            <span className="text-sm font-bold text-primary">{value}%</span>
          </div>
        )}
      </div>
    );
  }

  // Full circle mode (default)
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg className="transform -rotate-90" width={size} height={size}>
        {/* Background circle */}
        <circle
          className={trackColor}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        {/* Progress circle */}
        <circle
          className={`${color} transition-all duration-500`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
          }}
        />
      </svg>
      {showLabel && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">{value}%</span>
        </div>
      )}
    </div>
  );
}
