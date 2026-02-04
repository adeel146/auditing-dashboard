import { projectTimeline } from '../../data/mockData';
import { ProgressBar } from '../ui';

export default function ProjectTimeline() {
  // Calculate progress based on completed items
  const completedCount = projectTimeline.filter(
    (item) => item.status === 'completed'
  ).length;
  const progressPercentage = (completedCount / projectTimeline.length) * 100;

  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <h3 className="text-base font-bold text-primary mb-4">Project Timeline</h3>

      {/* Progress Bar */}
      <div className="relative mb-8">
        <ProgressBar value={progressPercentage} />
        
        {/* Milestone Dots */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
          {projectTimeline.map((milestone, index) => {
            const position = (index / (projectTimeline.length - 1)) * 100;
            let dotColor = 'bg-border';
            if (milestone.status === 'completed') dotColor = 'bg-success';
            else if (milestone.status === 'in-progress') dotColor = 'bg-warning';

            return (
              <div
                key={milestone.id}
                className={`w-2.5 h-2.5 rounded-full ${dotColor} border-2 border-white shadow-sm`}
                style={{ position: 'absolute', left: `${position}%`, transform: 'translateX(-50%)' }}
              />
            );
          })}
        </div>
      </div>

      {/* Timeline Labels */}
      <div className="flex justify-between">
        {projectTimeline.map((milestone) => (
          <div key={milestone.id} className="text-center flex-1">
            <div className="text-sm font-medium text-primary">{milestone.name}</div>
            <div className="text-xs text-secondary mt-1">{milestone.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
