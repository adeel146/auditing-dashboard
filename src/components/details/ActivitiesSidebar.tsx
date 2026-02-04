interface Activity {
  id: number;
  message: string;
  time: string;
}

interface ActivitiesSidebarProps {
  activities: Activity[];
}

export default function ActivitiesSidebar({ activities }: ActivitiesSidebarProps) {
  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <h3 className="text-base font-bold text-primary mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={activity.id}>
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-info mt-2 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-base font-medium text-primary leading-relaxed">
                  {activity.message}
                </p>
              </div>
              <span className="text-xs text-secondary whitespace-nowrap">{activity.time}</span>
            </div>
            {index < activities.length - 1 && (
              <div className="h-px bg-border mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
