import { useNavigate } from "react-router-dom";
import { perspectives } from "../../data/mockData";

const statusColors: Record<string, string> = {
  completed: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  "not-started": "bg-gray-400",
  "in-progress": "bg-warning",
  "partially-uploaded": "bg-info",
  "fully-uploaded": "bg-info",
  delayed: "bg-error",
};

const legendItems = [
  { label: "Not Started", color: "bg-gray-400" },
  { label: "In Progress", color: "bg-warning" },
  { label: "Completed", color: "bg-success" },
  { label: "Partially Uploaded", color: "bg-info" },
  { label: "Fully Uploaded", color: "bg-[#0078D7]" },
  { label: "Delayed", color: "bg-error" },
];

export default function ProgressStatus() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h3 className="text-base font-bold text-primary">Progress Status</h3>

        {/* Legend */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <span className="text-xs text-secondary">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid - Scrollable on mobile */}
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="grid grid-cols-10 gap-2" style={{ minWidth: "1000px" }}>
          {perspectives.map((perspective) => (
            <div
              key={perspective.id}
              className="flex flex-col gap-2 cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => navigate("/perspectives/1")}
            >
              {/* Perspective Header */}
              <div className="bg-primary rounded-lg p-3 h-20 flex flex-col justify-between">
                <div className="text-[10px] font-semibold text-white text-center leading-tight line-clamp-2">
                  {perspective.name}
                </div>
                <div className="bg-white/20 rounded-full px-2 py-0.5 mx-auto">
                  <span className="text-xs font-bold text-white">
                    {perspective.progress.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Sub-perspectives */}
              {perspective.subPerspectives.map((sub) => {
                // Heights calculated so all columns total to same height (340px + gaps)
                // 3 items of h1: 3×108 + 2×8 = 340px
                // 2 items of h1.5: 2×166 + 1×8 = 340px
                // 1 item of h3: 340px
                const heightClass =
                  sub.height === 1.5
                    ? "h-[166px]"
                    : sub.height === 2
                      ? "h-[215px]"
                      : sub.height === 3
                        ? "h-[340px]"
                        : "h-[108px]";

                return (
                  <div
                    key={sub.id}
                    className={`bg-[#F8FAFC] border border-border rounded-lg p-2 ${heightClass} flex flex-col overflow-hidden`}
                  >
                    <div className="text-[9px] text-primary text-center leading-tight mb-2 line-clamp-2 shrink-0">
                      {sub.name}
                    </div>
                    <div className="flex flex-wrap gap-1 justify-center items-center flex-1">
                      {Array.from({ length: sub.criteriaCount }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-5 h-5 rounded-full ${statusColors[sub.status] || "bg-success"} text-white text-[10px] flex items-center justify-center font-medium`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
