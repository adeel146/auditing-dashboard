interface Activity {
  id: number;
  message: string;
  time: string;
}

interface ActivitiesSidebarProps {
  activities: Activity[];
}

export default function ActivitiesSidebar({
  activities,
}: ActivitiesSidebarProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
      <h3 className="text-sm font-bold text-primary mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-warning mt-1.5 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-info leading-relaxed">
                {activity.message}
              </p>
            </div>
            <span className="text-[10px] text-secondary whitespace-nowrap shrink-0">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
