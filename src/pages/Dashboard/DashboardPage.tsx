import {
  BarChart3,
  FileText,
  FileCheck,
  FolderOpen,
  CheckCircle,
  Upload,
} from "lucide-react";
import { StatCard } from "../../components/ui";
import {
  ProjectTimeline,
  ProgressStatus,
  ComplianceScore,
  TopPerformers,
  AuditReadiness,
  RecentActivities,
  PerformanceChart,
} from "../../components/dashboard";
import { dashboardStats } from "../../data/mockData";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Stats Cards - 6 columns on desktop, responsive on smaller screens */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        <StatCard
          value={`${dashboardStats.overallProgress}%`}
          label="Overall Progress"
          icon={<BarChart3 className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.totalCriteria}
          label="Total Criteria"
          icon={<FileText className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.completedCriteria}
          label="Completed Criteria"
          icon={<FileCheck className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.evidenceDocuments}
          label="Evidence Documents"
          icon={<FolderOpen className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.evidenceCompleted}
          label="Evidence (Completed)"
          icon={<CheckCircle className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.uploadedToDGA}
          label="Uploaded to DGA"
          icon={<Upload className="w-6 h-6" />}
        />
      </div>

      {/* Progress Status Grid */}
      <ProgressStatus />

      {/* Bottom Row - Scores, Leaders, Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ComplianceScore score={65} label="Overall Compliance Score" />
        <TopPerformers />
        <RecentActivities />
      </div>

      {/* Performance Chart & Audit Readiness */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>
        <AuditReadiness />
      </div>
    </div>
  );
}
