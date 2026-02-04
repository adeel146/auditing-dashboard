import { ArrowUpDown } from 'lucide-react';
import { StatusBadge } from '../ui';

interface Document {
  id: number;
  number: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: 'approved' | 'pending' | 'rejected';
}

interface DocumentsTableProps {
  documents: Document[];
}

const columns = [
  { id: 'number', label: 'Document number' },
  { id: 'name', label: 'Document Name' },
  { id: 'lead', label: 'Document Lead' },
  { id: 'preparer', label: 'Document Preparer' },
  { id: 'date', label: 'Date' },
  { id: 'dueDate', label: 'Due Date' },
  { id: 'status', label: 'Status' },
];

export default function DocumentsTable({ documents }: DocumentsTableProps) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-[#f5f8fb] px-4 py-3">
        <div className="grid grid-cols-7 gap-4">
          {columns.map((col) => (
            <div key={col.id} className="flex items-center gap-2">
              <span className="text-xs text-primary tracking-wide">{col.label}</span>
              <ArrowUpDown className="w-3 h-3 text-secondary" />
            </div>
          ))}
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border">
        {documents.map((doc) => (
          <div key={doc.id} className="px-4 py-4">
            <div className="grid grid-cols-7 gap-4 items-center">
              <span className="text-sm text-primary text-center">{doc.number}</span>
              <span className="text-sm text-primary">{doc.name}</span>
              <span className="text-sm text-primary text-center">{doc.lead}</span>
              <span className="text-sm text-primary text-center">{doc.preparer}</span>
              <span className="text-sm text-primary text-center">{doc.date}</span>
              <span className="text-sm text-primary text-center">{doc.dueDate}</span>
              <div className="flex justify-center">
                <StatusBadge status={doc.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
