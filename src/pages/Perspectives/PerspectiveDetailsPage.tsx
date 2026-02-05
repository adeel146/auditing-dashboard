import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  FileText,
  FileSearch,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { CircularProgress, Tabs } from "../../components/ui";
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
            <h2 className="text-sm font-bold text-primary mb-1">
              {details.title}
            </h2>
            <p className="text-xs text-secondary">{details.description}</p>
          </div>
          <CircularProgress
            value={details.progress}
            size={56}
            strokeWidth={5}
            color="text-success"
            trackColor="text-[#E8F5E9]"
          />
        </div>
      </div>

      {/* Evidence Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#FFF3E0] flex items-center justify-center">
            <FileText className="w-5 h-5 text-warning" />
          </div>
          <div>
            <div className="text-xl font-bold text-primary">
              {details.evidenceStats.total}
            </div>
            <div className="text-xs text-secondary">Total Evidence</div>
          </div>
        </div>
        <div className="bg-white border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#FFF3E0] flex items-center justify-center">
            <FileSearch className="w-5 h-5 text-warning" />
          </div>
          <div>
            <div className="text-xl font-bold text-primary">
              {details.evidenceStats.underReview}
            </div>
            <div className="text-xs text-secondary">Under Review Evidence</div>
          </div>
        </div>
        <div className="bg-white border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#FFF3E0] flex items-center justify-center">
            <Clock className="w-5 h-5 text-warning" />
          </div>
          <div>
            <div className="text-xl font-bold text-primary">
              {details.evidenceStats.inProgress}
            </div>
            <div className="text-xs text-secondary">In Progress Evidence</div>
          </div>
        </div>
        <div className="bg-white border border-border rounded-xl p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#FFF3E0] flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5 text-warning" />
          </div>
          <div>
            <div className="text-xl font-bold text-primary">
              {details.evidenceStats.completed}
            </div>
            <div className="text-xs text-secondary">Completed Evidence</div>
          </div>
        </div>
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
            <table className="w-full border-collapse">
              <tbody>
                {/* Objective */}
                <tr>
                  <td className="w-48 align-top border-r border-border">
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm font-medium text-primary">
                        Objective
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm text-primary">
                        {details.objective}
                      </span>
                    </div>
                  </td>
                </tr>

                {/* Requirements */}
                <tr>
                  <td className="w-48 align-top border-r border-border">
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm font-medium text-primary">
                        Implementation <br /> Requirements
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5 space-y-2">
                      {details.requirements.map((req, index) => (
                        <span
                          key={index}
                          className="text-sm text-primary leading-relaxed"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>

                {/* Evidence Documents */}
                <tr>
                  <td className="w-48 align-top border-r border-border">
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm font-medium text-primary">
                        Evidence <br /> Documents
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm text-primary">
                        {details.evidenceDocuments}
                      </span>
                    </div>
                  </td>
                </tr>

                {/* Related Regulations */}
                <tr>
                  <td className="w-48 align-top border-r border-border">
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm font-medium text-primary">
                        Related <br /> Regulations
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm text-info">
                        {details.relatedRegulations}
                      </span>
                    </div>
                  </td>
                </tr>

                {/* Scope */}
                <tr>
                  <td className="w-48 align-top border-r border-border">
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm font-medium text-primary">
                        Scope
                      </span>
                    </div>
                  </td>
                  <td>
                    <div className="bg-[#1B35570D] rounded-[10px] p-2 m-2.5">
                      <span className="text-sm text-primary">
                        {details.scope}
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Leaders Section */}
          <div className="bg-white border border-border rounded-xl p-4 sm:p-6">
            <h3 className="text-sm font-bold text-primary mb-4">Leaders</h3>
            <div className="flex flex-wrap gap-4">
              {details.leaders.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-[#F8FAFC] rounded-xl px-4 py-3 flex items-center gap-3"
                >
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
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
        <div className="space-y-6">
          {/* Documents Table */}
          <DocumentsTable documents={documents} />

          {/* Comments and Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Comments - takes 2 columns */}
            <div className="lg:col-span-2">
              <CommentsSection comments={comments} />
            </div>

            {/* Activities Sidebar - takes 1 column */}
            <div className="lg:col-span-1">
              <ActivitiesSidebar activities={documentActivities} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
