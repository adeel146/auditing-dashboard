import { CircularProgress, Avatar } from "../ui";
import { topPerformers } from "../../data/mockData";

interface ComplianceScoreProps {
  score: number;
  label: string;
}

export function ComplianceScore({ score, label }: ComplianceScoreProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
      <h3 className="text-base font-bold text-primary mb-6">{label}</h3>
      <div className="flex flex-col items-center justify-center h-[80%] ">
        <CircularProgress
          value={score}
          size={220}
          strokeWidth={16}
          showLabel={false}
          color="text-error"
          trackColor="text-[#F1F5F9]"
          semiCircle={true}
        />
        <div className="flex flex-col items-center -mt-15">
          <span className="text-[44px] font-bold text-primary leading-4 capitalize">
            {score}%
          </span>
          <span className="text-sm font-normal text-secondary mt-4 text-center capitalize">
            Basic Standards 2025
          </span>
        </div>
      </div>
    </div>
  );
}

export function TopPerformers() {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
      <h3 className="text-base font-bold text-primary mb-6">
        Top Performing Perspective Leaders
      </h3>
      <div className="space-y-4">
        {topPerformers.map((performer, index) => (
          <div key={performer.id}>
            <div className="flex items-center gap-3">
              <Avatar src={performer.avatar} name={performer.name} size="md" />
              <div className="flex-1 min-w-0">
                <div className="text-base font-medium text-primary truncate capitalize leading-[22px]">
                  {performer.name}
                </div>
                <div className="text-xs text-secondary">
                  {performer.perspective}
                </div>
              </div>
              <div className="text-sm font-bold text-primary">
                {performer.score}%
              </div>
            </div>
            {index < topPerformers.length - 1 && (
              <div className="h-px bg-border mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AuditReadiness() {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
      <h3 className="text-base font-bold text-primary mb-6">Audit Readiness</h3>
      <div className="flex flex-col items-center justify-center">
        <CircularProgress
          value={80}
          size={220}
          strokeWidth={16}
          showLabel={false}
          color="text-success"
          trackColor="text-[#F1F5F9]"
          semiCircle={true}
        />
        <div className="flex flex-col items-center -mt-15">
          <span className="text-[44px] font-bold text-primary leading-4 capitalize">
            80%
          </span>
          <span className="text-sm font-normal text-secondary mt-4 text-center capitalize">
            Readiness Level
          </span>
        </div>
      </div>
      <div className="h-px bg-border my-4" />
      <div className="flex justify-around text-center">
        <div>
          <div className="text-2xl font-bold text-primary">12</div>
          <div className="text-xs text-secondary">Overdue Stds</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">5</div>
          <div className="text-xs text-secondary">Missing Evidence</div>
        </div>
      </div>
    </div>
  );
}
