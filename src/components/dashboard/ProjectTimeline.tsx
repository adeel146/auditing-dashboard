import { ChevronDown } from "lucide-react";
import { projectTimeline } from "../../data/mockData";

export default function ProjectTimeline() {
  // Calculate progress based on completed items
  const completedCount = projectTimeline.filter(
    (item) => item.status === "completed",
  ).length;
  const progressPercentage = (completedCount / projectTimeline.length) * 100;

  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-primary">Project Timeline</h3>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-border rounded-lg text-sm font-medium text-primary hover:bg-gray-50 transition-colors">
          2026
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Timeline with Progress Bar - Scrollable on mobile */}
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="min-w-[600px] sm:min-w-0">
          {/* Progress Bar Track */}
          <div className="relative h-3 sm:h-3.5 bg-[#F5F8FB] rounded-full overflow-visible">
            {/* Progress Fill */}
            <div
              className="absolute top-0 left-0 bg-success rounded-full transition-all duration-500 h-3 sm:h-3.5"
              style={{ width: `${progressPercentage}%` }}
            />

            {/* Milestone Dots */}
            {projectTimeline.map((milestone, index) => {
              // Center of each flex-1 item: (index + 0.5) / total * 100
              const position = ((index + 0.5) / projectTimeline.length) * 100;
              // White dot in green area, red dot in white area
              const isInProgressArea = position <= progressPercentage;
              const dotColor = isInProgressArea ? "bg-white" : "bg-error";

              return (
                <div
                  key={milestone.id}
                  className={`absolute top-1/2 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${dotColor} shadow-sm z-10`}
                  style={{
                    left: `${position}%`,
                    transform: "translateX(-50%) translateY(-50%)",
                  }}
                />
              );
            })}
          </div>

          {/* Timeline Labels */}
          <div className="flex justify-between mt-3 sm:mt-4">
            {projectTimeline.map((milestone) => (
              <div
                key={milestone.id}
                className="text-center flex-1 px-0.5 sm:px-1"
              >
                <div className="text-[10px] sm:text-xs text-secondary mb-0.5 sm:mb-1">
                  {milestone.date}
                </div>
                <div className="text-[10px] sm:text-xs font-medium text-primary leading-tight">
                  {milestone.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
