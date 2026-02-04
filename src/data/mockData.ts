// Dashboard Statistics
export const dashboardStats = {
  overallProgress: 78.65,
  totalCriteria: 95,
  completedCriteria: 52,
  evidenceDocuments: 386,
  evidenceCompleted: 302,
  uploadedToDGA: 258,
};

// Project Timeline
export const projectTimeline = [
  { id: 1, name: 'Kickoff Workshop', date: 'Mar 17', status: 'completed' },
  { id: 2, name: 'Data Collection', date: 'March 18', status: 'completed' },
  { id: 3, name: 'Initial Phase', date: 'May 8', status: 'in-progress' },
  { id: 4, name: 'Verification', date: 'May 9–July 12', status: 'pending' },
  { id: 5, name: 'Completion Reviews', date: 'July 13', status: 'pending' },
  { id: 6, name: 'Cycle Conclusion', date: 'August 21', status: 'pending' },
];

// Perspectives Data
export const perspectives = [
  {
    id: 1,
    name: 'Strategy and Planning',
    progress: 97.78,
    subPerspectives: [
      { id: '1-1', name: 'Digital Transformation', criteriaCount: 2, status: 'completed' },
      { id: '1-2', name: 'Digital Governance', criteriaCount: 2, status: 'completed' },
      { id: '1-3', name: 'Enterprise Architecture', criteriaCount: 2, status: 'completed' },
    ],
  },
  {
    id: 2,
    name: 'Organization and Culture',
    progress: 70.83,
    subPerspectives: [
      { id: '2-1', name: 'Digital Culture and Environment', criteriaCount: 2, status: 'warning' },
      { id: '2-2', name: 'Leadership Development', criteriaCount: 2, status: 'completed' },
      { id: '2-3', name: 'Skills & Capacity Building', criteriaCount: 2, status: 'warning' },
    ],
  },
  {
    id: 3,
    name: 'Operations and Execution',
    progress: 80.0,
    subPerspectives: [
      { id: '3-1', name: 'Business Processes', criteriaCount: 3, status: 'warning' },
      { id: '3-2', name: 'Governance Platforms', criteriaCount: 3, status: 'warning' },
    ],
  },
  {
    id: 4,
    name: 'Business Continuity',
    progress: 90.59,
    subPerspectives: [
      { id: '4-1', name: 'Risk Management', criteriaCount: 2, status: 'completed' },
      { id: '4-2', name: 'Business Continuity', criteriaCount: 2, status: 'not-started' },
    ],
  },
  {
    id: 5,
    name: 'Information Technology',
    progress: 75.0,
    subPerspectives: [
      { id: '5-1', name: 'Support Systems', criteriaCount: 2, status: 'completed' },
      { id: '5-2', name: 'IT Infrastructure', criteriaCount: 2, status: 'completed' },
      { id: '5-3', name: 'Cloud Infrastructure', criteriaCount: 2, status: 'completed' },
    ],
  },
  {
    id: 6,
    name: 'Comprehensive Governance',
    progress: 64.44,
    subPerspectives: [
      { id: '6-1', name: 'Governance Platforms', criteriaCount: 2, status: 'completed' },
      { id: '6-2', name: 'Service Quality', criteriaCount: 2, status: 'not-started' },
    ],
  },
  {
    id: 7,
    name: 'Channels and Services',
    progress: 100,
    subPerspectives: [
      { id: '7-1', name: 'Service Quality', criteriaCount: 2, status: 'completed' },
      { id: '7-2', name: 'Digital Channels', criteriaCount: 2, status: 'completed' },
    ],
  },
  {
    id: 8,
    name: 'Beneficiary Centralization',
    progress: 60.0,
    subPerspectives: [
      { id: '8-1', name: 'User Engagement', criteriaCount: 2, status: 'warning' },
      { id: '8-2', name: 'User Relationship', criteriaCount: 2, status: 'warning' },
      { id: '8-3', name: 'User Experience', criteriaCount: 2, status: 'warning' },
    ],
  },
  {
    id: 9,
    name: 'Government Data',
    progress: 87.5,
    subPerspectives: [
      { id: '9-1', name: 'Data Governance', criteriaCount: 2, status: 'warning' },
      { id: '9-2', name: 'Data Usage & Availability', criteriaCount: 2, status: 'warning' },
      { id: '9-3', name: 'Open Data', criteriaCount: 2, status: 'completed' },
    ],
  },
  {
    id: 10,
    name: 'Research and Innovation',
    progress: 17.65,
    subPerspectives: [
      { id: '10-1', name: 'Innovation', criteriaCount: 2, status: 'error' },
      { id: '10-2', name: 'Creative Solutions', criteriaCount: 2, status: 'error' },
    ],
  },
];

// Recent Activities
export const recentActivities = [
  {
    id: 1,
    message: 'Document "Strategy_Review.pdf" was uploaded by Ahmed Khaled',
    time: '5 mins ago',
  },
  {
    id: 2,
    message: 'Task "Review Compliance Files" was assigned to Mona Hamed',
    time: '20 mins ago',
  },
  {
    id: 3,
    message: 'New criterion "5.3 Digital Identity" was created by Admin',
    time: '1 hour ago',
  },
];

// Top Performers
export const topPerformers = [
  {
    id: 1,
    name: 'Ahmed Al-Ali',
    perspective: 'Strategy Perspective',
    score: 96,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Sarah Al-Khaled',
    perspective: 'Beneficiary Perspective',
    score: 94,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Mohammad Al-Mansour',
    perspective: 'IT Perspective',
    score: 92,
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
];

// Monthly Performance Data
export const monthlyPerformance = [
  { month: 'Jan', value: 45 },
  { month: 'Feb', value: 39 },
  { month: 'Mar', value: 41 },
  { month: 'Apr', value: 22 },
  { month: 'May', value: 45 },
  { month: 'Jun', value: 40 },
  { month: 'Jul', value: 28 },
  { month: 'Aug', value: 45 },
  { month: 'Sep', value: 40 },
  { month: 'Oct', value: 28 },
  { month: 'Nov', value: 45 },
  { month: 'Dec', value: 40 },
];

// Strategic Planning Details
export const strategicPlanningDetails = {
  id: 1,
  title: 'Digital Transformation Strategic Planning',
  category: 'Strategy & Planning',
  description: 'Develop comprehensive strategic plans for digital transformation aligned with organizational goals',
  progress: 100,
  objective: "Develop a digital transformation strategy aligned with the organization's strategy and the objectives of Saudi Vision 2030.",
  requirements: [
    "Prepare a digital transformation strategy for the transition to electronic government transactions, including the following:",
    "a. The organization's vision, mission, strategic pillars, and strategic objectives, and their alignment with the organization's overall strategy.",
    "b. Strategic initiatives, programs, and performance indicators.",
    "c. A clear methodology for integration and coordination with relevant external entities to achieve the strategy's objectives.",
    "d. Required competencies, capabilities, and skills necessary to achieve the strategy's objectives.",
  ],
  evidenceDocuments: "Submit the approved digital transformation strategy that includes all the requirements of this standard, provided that it has been approved within a period not exceeding 36 months.",
  relatedRegulations: "Council of Ministers Resolution No. (40) dated 27/2/1427H, Clause (16).",
  scope: "All government entities.",
  evidenceStats: {
    total: 4,
    underReview: 3,
    inProgress: 2,
    completed: 1,
  },
  leaders: [
    {
      id: 1,
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 2,
      name: 'Ahmed Al-Ali',
      role: 'Strategy Perspective',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ],
};

// Documents
export const documents: {
  id: number;
  number: string;
  name: string;
  lead: string;
  preparer: string;
  date: string;
  dueDate: string;
  status: 'approved' | 'pending' | 'rejected';
}[] = [
  {
    id: 1,
    number: '5.4.1.1',
    name: 'Digital_Transformation_Plan.pdf',
    lead: 'Ahmed Khaled',
    preparer: 'Ahmed Khaled',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'approved',
  },
  {
    id: 2,
    number: '5.4.1.2',
    name: 'KPI_Framework.xlsx',
    lead: 'Mona Hamed',
    preparer: 'Mona Hamed',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'pending',
  },
  {
    id: 3,
    number: '5.4.1.3',
    name: 'Roadmap_Version1.docx',
    lead: 'Rami AlSharif',
    preparer: 'Rami AlSharif',
    date: '2025-08-01',
    dueDate: '2025-08-01',
    status: 'pending',
  },
];

// Comments
export const comments = [
  {
    id: 1,
    author: 'Sara Ibrahim',
    initials: 'S',
    date: '2025-08-05',
    content: 'Ensure the plan includes a clear governance model.',
  },
  {
    id: 2,
    author: 'Mona Hamed',
    initials: 'M',
    date: '2025-08-05',
    content: 'Ensure the plan includes a clear governance model.',
  },
];

// Document Activities
export const documentActivities = [
  {
    id: 1,
    message: 'Roadmap_Version1.docx uploaded by Rami AlSharif',
    time: '5 mins ago',
  },
  {
    id: 2,
    message: 'KPI_Framework.xlsx uploaded by Mona Hamed',
    time: '20 mins ago',
  },
  {
    id: 3,
    message: 'Digital_Transformation_Plan.pdf approved by Advisory Team',
    time: '1 hour ago',
  },
];

// Navigation Items
export const navigationItems = [
  { id: 'dashboard', name: 'Dashboard', icon: 'Home', path: '/' },
  { id: 'perspectives', name: 'Perspectives', icon: 'FileText', path: '/perspectives' },
  { id: 'tasks', name: 'Tasks', icon: 'User', path: '/tasks' },
  { id: 'documents', name: 'Documents', icon: 'File', path: '/documents' },
  { id: 'reports', name: 'Reports', icon: 'BarChart', path: '/reports' },
  { id: 'users', name: 'Users & Roles', icon: 'Users', path: '/users' },
];
