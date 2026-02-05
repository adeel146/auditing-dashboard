import { ArrowUpDown } from "lucide-react";

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
  { id: "number", label: "Document Number" },
  { id: "name", label: "Document Name" },
  { id: "lead", label: "Document Lead" },
  { id: "preparer", label: "Document Preparer" },
  { id: "date", label: "Date" },
  { id: "dueDate", label: "Due Date" },
  { id: "status", label: "Status" },
];

const getStatusStyle = (status: string) => {
  switch (status) {
    case "approved":
      return "text-success bg-[#E8F5E9]";
    case "pending":
      return "text-warning bg-[#FFF8E1]";
    case "rejected":
      return "text-error bg-[#FFEBEE]";
    default:
      return "text-secondary bg-gray-100";
  }
};

const getStatusLabel = (status: string) => {
  switch (status) {
    case "approved":
      return "Approved";
    case "pending":
      return "Pending Review";
    case "rejected":
      return "Rejected";
    default:
      return status;
  }
};

export default function DocumentsTable({ documents }: DocumentsTableProps) {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden p-3">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F8FAFC]">
              {columns.map((col, index) => (
                <th
                  key={col.id}
                  className={`text-left p-4 ${index === 0 ? "rounded-l-lg" : ""} ${index === columns.length - 1 ? "rounded-r-lg" : ""}`}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-medium text-primary">
                      {col.label}
                    </span>
                    <ArrowUpDown className="w-3 h-3 text-secondary" />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {documents.map((doc) => (
              <tr key={doc.id} className="hover:bg-gray-50 transition-colors">
                <td className="p-4 text-sm text-primary">{doc.number}</td>
                <td className="p-4 text-sm text-primary">{doc.name}</td>
                <td className="p-4 text-sm text-primary">{doc.lead}</td>
                <td className="p-4 text-sm text-primary">{doc.preparer}</td>
                <td className="p-4 text-sm text-primary">{doc.date}</td>
                <td className="p-4 text-sm text-primary">{doc.dueDate}</td>
                <td className="p-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(doc.status)}`}
                  >
                    {getStatusLabel(doc.status)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
