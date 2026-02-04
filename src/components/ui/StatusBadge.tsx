interface StatusBadgeProps {
  status: 'approved' | 'pending' | 'rejected' | 'in-progress' | 'completed' | 'not-started' | 'warning' | 'error';
  label?: string;
}

const statusConfig = {
  approved: {
    bg: 'bg-success/10',
    text: 'text-success',
    label: 'Approved',
  },
  pending: {
    bg: 'bg-warning/10',
    text: 'text-warning',
    label: 'Pending Review',
  },
  rejected: {
    bg: 'bg-error/10',
    text: 'text-error',
    label: 'Rejected',
  },
  'in-progress': {
    bg: 'bg-warning/10',
    text: 'text-warning',
    label: 'In Progress',
  },
  completed: {
    bg: 'bg-success/10',
    text: 'text-success',
    label: 'Completed',
  },
  'not-started': {
    bg: 'bg-secondary/10',
    text: 'text-secondary',
    label: 'Not Started',
  },
  warning: {
    bg: 'bg-warning/10',
    text: 'text-warning',
    label: 'In Progress',
  },
  error: {
    bg: 'bg-error/10',
    text: 'text-error',
    label: 'Delayed',
  },
};

export default function StatusBadge({ status, label }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm ${config.bg} ${config.text}`}>
      {label || config.label}
    </span>
  );
}
