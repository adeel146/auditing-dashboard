import { useNavigate } from 'react-router-dom';
import { perspectives } from '../../data/mockData';

const statusColors: Record<string, string> = {
  completed: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
  'not-started': 'bg-secondary',
  'in-progress': 'bg-warning',
  'partially-uploaded': 'bg-info',
  'fully-uploaded': 'bg-info',
};

const legendItems = [
  { label: 'Not Started', color: 'bg-secondary' },
  { label: 'In Progress', color: 'bg-warning' },
  { label: 'Completed', color: 'bg-success' },
  { label: 'Partially Uploaded', color: 'bg-info' },
  { label: 'Fully Uploaded', color: 'bg-info' },
  { label: 'Delayed', color: 'bg-error' },
];

export default function ProgressStatus() {
  const navigate = useNavigate();

  return (
    <div className="bg-white border border-border rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-primary">Progress Status</h3>
        
        {/* Legend */}
        <div className="flex items-center gap-4 flex-wrap">
          {legendItems.map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${item.color}`} />
              <span className="text-sm text-primary">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-10 gap-3 min-w-[900px]">
          {perspectives.map((perspective) => (
            <div 
              key={perspective.id} 
              className="flex flex-col gap-3 cursor-pointer"
              onClick={() => navigate('/perspectives/1')}
            >
              {/* Perspective Header */}
              <div className="bg-primary rounded-xl p-3 h-[90px] flex flex-col justify-between">
                <div className="text-xs font-bold text-white text-center leading-tight">
                  {perspective.name}
                </div>
                <div className="bg-white/10 rounded-xl px-2 py-1 mx-auto">
                  <span className="text-sm font-bold text-white">{perspective.progress.toFixed(2)}%</span>
                </div>
              </div>

              {/* Sub-perspectives */}
              {perspective.subPerspectives.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-[#f5f8fb] border border-border rounded-xl p-2 min-h-[100px] flex flex-col"
                >
                  <div className="text-[10px] text-primary text-center leading-tight mb-2">
                    {sub.name}
                  </div>
                  <div className="flex flex-wrap gap-1 justify-center mt-auto">
                    {Array.from({ length: sub.criteriaCount }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-full ${statusColors[sub.status] || 'bg-success'} text-white text-xs flex items-center justify-center font-normal`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
