import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  FileSearch,
  Clock,
  CheckCircle,
} from "lucide-react";
import { CircularProgress, Tabs, StatCard, Avatar } from "../../components/ui";
import {
  strategicPlanningDetails,
  documents,
  comments,
  documentActivities,
} from "../../data/mockData";
import DocumentsTable from "../../components/details/DocumentsTable";
import CommentsSection from "../../components/details/CommentsSection";
import ActivitiesSidebar from "../../components/details/ActivitiesSidebar";

export default function PerspectiveDetailsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");
  const details = strategicPlanningDetails;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate(-1)}
          className="text-primary hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-base font-bold text-primary">{details.title}</h1>
      </div>

      {/* Title Card */}
      <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-border text-xs font-medium text-secondary mb-3">
              {details.category}
            </span>
            <h2 className="text-base font-bold text-primary mb-1">
              {details.title}
            </h2>
            <p className="text-sm text-secondary">{details.description}</p>
          </div>
          <CircularProgress
            value={details.progress}
            size={70}
            strokeWidth={6}
            color="text-success"
            trackColor="text-[#E8F5E9]"
          />
        </div>
      </div>

      {/* Evidence Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard
          value={details.evidenceStats.total}
          label="Total Evidence"
          icon={<FileText className="w-5 h-5" />}
          iconBgColor="bg-[#E3F2FD]"
          iconColor="text-info"
        />
        <StatCard
          value={details.evidenceStats.underReview}
          label="Under Review Evidence"
          icon={<FileSearch className="w-5 h-5" />}
          iconBgColor="bg-[#E3F2FD]"
          iconColor="text-info"
        />
        <StatCard
          value={details.evidenceStats.inProgress}
          label="In Progress Evidence"
          icon={<Clock className="w-5 h-5" />}
          iconBgColor="bg-[#E3F2FD]"
          iconColor="text-info"
        />
        <StatCard
          value={details.evidenceStats.completed}
          label="Completed Evidence"
          icon={<CheckCircle className="w-5 h-5" />}
          iconBgColor="bg-[#E3F2FD]"
          iconColor="text-info"
        />
      </div>

      {/* Tabs */}
      <Tabs
        tabs={[
          { id: "overview", label: "Overview" },
          { id: "evidence", label: "Evidence" },
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Tab Content */}
      {activeTab === "overview" ? (
        <div className="space-y-6">
          {/* Content Sections - Table Layout */}
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <table className="w-full">
              <tbody>
                {/* Objective */}
                <tr className="border-b border-border">
                  <td className="bg-[#F8FAFC] p-4 w-[200px] align-top border-r border-border">
                    <span className="text-sm font-medium text-primary">
                      Objective
                    </span>
                  </td>
                  <td className="p-4 bg-white">
                    <p className="text-sm text-primary">{details.objective}</p>
                  </td>
                </tr>

                {/* Requirements */}
                <tr className="border-b border-border">
                  <td className="bg-[#F8FAFC] p-4 w-[200px] align-top border-r border-border">
                    <span className="text-sm font-medium text-primary">
                      Implementation Requirements
                    </span>
                  </td>
                  <td className="p-4 bg-white">
                    <div className="space-y-2">
                      {details.requirements.map((req, index) => (
                        <p
                          key={index}
                          className="text-sm text-primary leading-relaxed"
                        >
                          {req}
                        </p>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* Evidence Documents */}
                <tr className="border-b border-border">
                  <td className="bg-[#F8FAFC] p-4 w-[200px] align-top border-r border-border">
                    <span className="text-sm font-medium text-primary">
                      Evidence Documents
                    </span>
                  </td>
                  <td className="p-4 bg-white">
                    <p className="text-sm text-primary">
                      {details.evidenceDocuments}
                    </p>
                  </td>
                </tr>

                {/* Related Regulations */}
                <tr className="border-b border-border">
                  <td className="bg-[#F8FAFC] p-4 w-[200px] align-top border-r border-border">
                    <span className="text-sm font-medium text-primary">
                      Related Regulations
                    </span>
                  </td>
                  <td className="p-4 bg-white">
                    <p className="text-sm text-primary">
                      {details.relatedRegulations}
                    </p>
                  </td>
                </tr>

                {/* Scope */}
                <tr>
                  <td className="bg-[#F8FAFC] p-4 w-[200px] align-top border-r border-border">
                    <span className="text-sm font-medium text-primary">
                      Scope
                    </span>
                  </td>
                  <td className="p-4 bg-white">
                    <p className="text-sm text-primary">{details.scope}</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Leaders Section */}
          <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
            <h3 className="text-base font-bold text-primary mb-4">Leaders</h3>
            <div className="flex flex-wrap gap-4">
              {details.leaders.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-[#F8FAFC] rounded-xl p-4 flex items-center gap-3"
                >
                  <Avatar src={leader.avatar} name={leader.name} size="md" />
                  <div>
                    <div className="text-sm font-semibold text-primary">
                      {leader.name}
                    </div>
                    <div className="text-xs text-info">{leader.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
          <div className="space-y-6">
            {/* Documents Table */}
            <DocumentsTable documents={documents} />

            {/* Comments */}
            <CommentsSection comments={comments} />
          </div>

          {/* Activities Sidebar */}
          <ActivitiesSidebar activities={documentActivities} />
        </div>
      )}
    </div>
  );
}
