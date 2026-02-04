# Auditing Dashboard

A React-based digital transformation and compliance tracking platform dashboard built as a technical assessment task.

## 🚀 How to Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── PerformanceChart.tsx
│   │   ├── ProgressStatus.tsx
│   │   ├── ProjectTimeline.tsx
│   │   ├── RecentActivities.tsx
│   │   └── ScoreWidgets.tsx
│   ├── details/           # Detail page components
│   │   ├── ActivitiesSidebar.tsx
│   │   ├── CommentsSection.tsx
│   │   └── DocumentsTable.tsx
│   ├── layout/            # Layout components
│   │   ├── Header.tsx
│   │   ├── MainLayout.tsx
│   │   └── Sidebar.tsx
│   └── ui/                # Reusable UI components
│       ├── Avatar.tsx
│       ├── Card.tsx
│       ├── CircularProgress.tsx
│       ├── ProgressBar.tsx
│       ├── StatCard.tsx
│       ├── StatusBadge.tsx
│       └── Tabs.tsx
├── data/
│   └── mockData.ts        # Static mock data (JSON)
├── pages/
│   ├── Dashboard/
│   │   └── DashboardPage.tsx
│   └── Perspectives/
│       └── PerspectiveDetailsPage.tsx
├── App.tsx                # Main app with routing
├── index.css              # Global styles & Tailwind config
└── main.tsx               # Entry point
```

## 🛠️ Tech Stack

- **Framework:** React 19 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Routing:** React Router v7
- **Charts:** Recharts
- **Icons:** Lucide React

## 📋 Implemented Screens

### 1. Dashboard Screen
- Project timeline with milestones
- Summary statistics cards (Overall Progress, Total Criteria, etc.)
- Progress status grid showing 10 perspectives
- Overall compliance score (donut chart)
- Top performing perspective leaders
- 12-month performance bar chart
- Audit readiness widget
- Recent activities feed

### 2. Details Page (Strategic Planning)
- Header with title, category tag, and progress indicator
- Evidence summary cards (Total, Under Review, In Progress, Completed)
- Tab navigation (Overview / Evidence)
- Structured content sections (Objective, Requirements, Evidence Documents, Related Regulations, Scope)
- Leaders section with avatars

### 3. Document Tracking Screen
- Document table with sortable columns
- Status badges (Approved, Pending Review)
- Comments section with user avatars
- Recent activities sidebar

## 🎨 Design Decisions

### Component Architecture
- **Atomic Design:** Small, reusable UI components (Avatar, StatusBadge, ProgressBar)
- **Composition:** Larger components composed of smaller ones
- **Separation of Concerns:** Data in `mockData.ts`, layout in `layout/`, features in page-specific folders

### Styling Approach
- **Tailwind CSS v4:** Utility-first CSS with custom theme variables
- **Design Tokens:** Colors defined as CSS custom properties (`--color-primary`, `--color-secondary`, etc.)
- **Cairo Font:** Arabic-friendly font for international support

### State Management
- **Local State:** React useState for UI state (tabs, etc.)
- **Props Drilling:** Simple prop passing for this scope (could use Context/Zustand for larger apps)

## 🔄 Assumptions Made

1. **Static Data:** All data is mocked locally; no backend integration required
2. **Desktop First:** Optimized for desktop viewing with basic responsive support
3. **Single Language:** English only (Arabic RTL support could be added)
4. **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)

## 🚀 Improvements with More Time

1. **Testing:** Add Jest/Vitest unit tests and Playwright E2E tests
2. **Accessibility:** Improve ARIA labels, keyboard navigation, focus management
3. **Animations:** Add Framer Motion for smooth page transitions
4. **Dark Mode:** Implement theme switching with Tailwind's dark mode
5. **i18n:** Add React-intl for Arabic/English language support
6. **State Management:** Implement Zustand or Redux Toolkit for complex state
7. **API Integration:** Connect to real backend with React Query/SWR
8. **Error Boundaries:** Add error handling and fallback UI
9. **PWA:** Convert to Progressive Web App with offline support
10. **Performance:** Add React.lazy for code splitting, optimize images

## 📄 License

This project was created as a technical assessment task.
