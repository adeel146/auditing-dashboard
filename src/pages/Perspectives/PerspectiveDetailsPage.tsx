import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Files, FileSearch, FileOutput, FileCheck } from 'lucide-react';
import { CircularProgress, Tabs, StatCard, Avatar } from '../../components/ui';
import { strategicPlanningDetails, documents, comments, documentActivities } from '../../data/mockData';
import DocumentsTable from '../../components/details/DocumentsTable';
import CommentsSection from '../../components/details/CommentsSection';
import ActivitiesSidebar from '../../components/details/ActivitiesSidebar';

export default function PerspectiveDetailsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const details = strategicPlanningDetails;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate(-1)}
          className="text-primary hover:text-secondary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <h1 className="text-base font-bold text-primary">{details.title}</h1>
      </div>

      {/* Title Card */}
      <div className="bg-white border border-border rounded-xl p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-border text-xs font-medium text-secondary mb-3">
              {details.category}
            </span>
            <h2 className="text-base font-bold text-primary">{details.title}</h2>
            <p className="text-sm text-secondary mt-1">{details.description}</p>
          </div>
          <CircularProgress value={details.progress} size={80} />
        </div>
      </div>

      {/* Evidence Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard
          value={details.evidenceStats.total}
          label="Total Evidence"
          icon={<Files className="w-6 h-6 text-info" />}
        />
        <StatCard
          value={details.evidenceStats.underReview}
          label="Under Review Evidence"
          icon={<FileSearch className="w-6 h-6 text-info" />}
        />
        <StatCard
          value={details.evidenceStats.inProgress}
          label="In Progress Evidence"
          icon={<FileOutput className="w-6 h-6 text-info" />}
        />
        <StatCard
          value={details.evidenceStats.completed}
          label="Completed Evidence"
          icon={<FileCheck className="w-6 h-6 text-info" />}
        />
      </div>

      {/* Tabs */}
      <Tabs
        tabs={[
          { id: 'overview', label: 'Overview' },
          { id: 'evidence', label: 'Evidence' },
        ]}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Tab Content */}
      {activeTab === 'overview' ? (
        <div className="space-y-6">
          {/* Content Sections */}
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="grid grid-cols-[180px,1fr]">
              {/* Objective */}
              <div className="bg-primary/5 p-4 border-b border-border">
                <span className="text-base text-primary">Objective</span>
              </div>
              <div className="p-4 border-b border-border bg-background">
                <p className="text-base text-primary">{details.objective}</p>
              </div>

              {/* Requirements */}
              <div className="bg-primary/5 p-4 border-b border-border">
                <span className="text-base text-primary">Implementation Requirements</span>
              </div>
              <div className="p-4 border-b border-border bg-background">
                {details.requirements.map((req, index) => (
                  <p key={index} className="text-base text-primary leading-relaxed">
                    {req}
                  </p>
                ))}
              </div>

              {/* Evidence Documents */}
              <div className="bg-primary/5 p-4 border-b border-border">
                <span className="text-base text-primary">Evidence Documents</span>
              </div>
              <div className="p-4 border-b border-border bg-background">
                <p className="text-base text-primary">{details.evidenceDocuments}</p>
              </div>

              {/* Related Regulations */}
              <div className="bg-primary/5 p-4 border-b border-border">
                <span className="text-base text-primary">Related Regulations</span>
              </div>
              <div className="p-4 border-b border-border bg-background">
                <p className="text-base text-primary">{details.relatedRegulations}</p>
              </div>

              {/* Scope */}
              <div className="bg-primary/5 p-4">
                <span className="text-base text-primary">Scope</span>
              </div>
              <div className="p-4 bg-background">
                <p className="text-base text-primary">{details.scope}</p>
              </div>
            </div>
          </div>

          {/* Leaders Section */}
          <div className="bg-white border border-border rounded-xl p-4">
            <h3 className="text-base font-bold text-primary mb-4">Leaders</h3>
            <div className="flex gap-4">
              {details.leaders.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-background rounded-xl p-4 flex items-center gap-3"
                >
                  <Avatar src={leader.avatar} name={leader.name} size="lg" />
                  <div>
                    <div className="text-base font-medium text-primary">{leader.name}</div>
                    <div className="text-sm text-secondary">{leader.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-[2fr,1fr] gap-6">
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
