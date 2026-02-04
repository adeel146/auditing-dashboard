import { ChevronDown } from 'lucide-react';
import {
  BarChart3,
  FolderOpen,
  FolderCheck,
  FileCheck,
  FileUp,
  Shield,
} from 'lucide-react';
import { StatCard } from '../../components/ui';
import {
  ProjectTimeline,
  ProgressStatus,
  ComplianceScore,
  TopPerformers,
  AuditReadiness,
  RecentActivities,
  PerformanceChart,
} from '../../components/dashboard';
import { dashboardStats } from '../../data/mockData';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Stats Cards */}
      <div className="grid grid-cols-6 gap-4">
        <StatCard
          value={`${dashboardStats.overallProgress}%`}
          label="Overall Progress"
          icon={<BarChart3 className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.totalCriteria}
          label="Total Criteria"
          icon={<FolderOpen className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.completedCriteria}
          label="Completed Criteria"
          icon={<FolderCheck className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.evidenceDocuments}
          label="Evidence Documents"
          icon={<Shield className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.evidenceCompleted}
          label="Evidence (Completed)"
          icon={<FileCheck className="w-6 h-6" />}
        />
        <StatCard
          value={dashboardStats.uploadedToDGA}
          label="Uploaded to DGA"
          icon={<FileUp className="w-6 h-6" />}
        />
      </div>

      {/* Progress Status Grid */}
      <div className="flex items-center justify-between">
        <h3 className="text-base font-bold text-primary">Progress Status</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border rounded-lg text-sm font-medium text-primary">
          2026
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
      <ProgressStatus />

      {/* Bottom Row - Scores, Leaders, Activities */}
      <div className="grid grid-cols-3 gap-6">
        <ComplianceScore score={65} label="Overall Compliance Score" />
        <TopPerformers />
        <RecentActivities />
      </div>

      {/* Performance Chart & Audit Readiness */}
      <div className="grid grid-cols-[2fr,1fr] gap-6">
        <PerformanceChart />
        <AuditReadiness />
      </div>
    </div>
  );
}
