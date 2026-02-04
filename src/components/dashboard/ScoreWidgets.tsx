import { CircularProgress, Avatar } from '../ui';
import { topPerformers } from '../../data/mockData';

interface ComplianceScoreProps {
  score: number;
  label: string;
}

export function ComplianceScore({ score, label }: ComplianceScoreProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <h3 className="text-base font-bold text-primary mb-4">{label}</h3>
      <div className="flex items-center justify-center">
        <div className="relative">
          <CircularProgress value={score} size={200} strokeWidth={16} showLabel={false} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-primary">{score}%</span>
            <span className="text-sm text-secondary mt-1">Basic Standards 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopPerformers() {
  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <h3 className="text-base font-bold text-primary mb-4">Top Performing Perspective Leaders</h3>
      <div className="space-y-4">
        {topPerformers.map((performer, index) => (
          <div key={performer.id}>
            <div className="flex items-center gap-3">
              <Avatar src={performer.avatar} name={performer.name} size="lg" />
              <div className="flex-1">
                <div className="text-base font-medium text-primary">{performer.name}</div>
                <div className="text-sm text-secondary">{performer.perspective}</div>
              </div>
              <div className="text-base font-bold text-primary">{performer.score}%</div>
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
    <div className="bg-white border border-border rounded-xl p-4">
      <h3 className="text-base font-bold text-primary mb-4">Audit Readiness</h3>
      <div className="flex items-center justify-center">
        <div className="relative">
          <CircularProgress value={80} size={200} strokeWidth={16} showLabel={false} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-primary">80%</span>
            <span className="text-sm text-secondary mt-1">Readiness Level</span>
          </div>
        </div>
      </div>
      <div className="h-px bg-border my-4" />
      <div className="flex justify-around text-center">
        <div>
          <div className="text-2xl font-bold text-primary">12</div>
          <div className="text-sm text-secondary">Overdue Stds</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-primary">5</div>
          <div className="text-sm text-secondary">Missing Evidence</div>
        </div>
      </div>
    </div>
  );
}
