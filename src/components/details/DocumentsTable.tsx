import { ArrowUpDown } from "lucide-react";
import { StatusBadge } from "../ui";

interface Document {
  id: number;
  number: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: "approved" | "pending" | "rejected";
}

interface DocumentsTableProps {
  documents: Document[];
}

const columns = [
  { id: "number", label: "Document Number", width: "w-[120px]" },
  { id: "name", label: "Document Name", width: "flex-1" },
  { id: "lead", label: "Document Lead", width: "w-[140px]" },
  { id: "preparer", label: "Document Preparer", width: "w-[140px]" },
  { id: "date", label: "Date", width: "w-[100px]" },
  { id: "dueDate", label: "Due Date", width: "w-[100px]" },
  { id: "status", label: "Status", width: "w-[120px]" },
];

export default function DocumentsTable({ documents }: DocumentsTableProps) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      {/* Header */}
      <div className="bg-white border-b border-border px-4 py-3">
        <div className="flex items-center gap-4">
          {columns.map((col) => (
            <div
              key={col.id}
              className={`flex items-center gap-1 ${col.width}`}
            >
              <span className="text-xs font-medium text-primary">
                {col.label}
              </span>
              <ArrowUpDown className="w-3 h-3 text-secondary" />
            </div>
          ))}
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className="px-4 py-3 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary w-[120px]">
                {doc.number}
              </span>
              <span className="text-sm text-info flex-1 truncate">
                {doc.name}
              </span>
              <span className="text-sm text-info w-[140px]">{doc.lead}</span>
              <span className="text-sm text-info w-[140px]">
                {doc.preparer}
              </span>
              <span className="text-sm text-primary w-[100px]">{doc.date}</span>
              <span className="text-sm text-primary w-[100px]">
                {doc.dueDate}
              </span>
              <div className="w-[120px]">
                <StatusBadge status={doc.status} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
