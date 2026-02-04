import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  FileText,
  User,
  File,
  BarChart3,
  Users,
} from 'lucide-react';

const navigationItems = [
  { id: 'dashboard', name: 'Dashboard', icon: Home, path: '/' },
  { id: 'perspectives', name: 'Perspectives', icon: FileText, path: '/perspectives' },
  { id: 'tasks', name: 'Tasks', icon: User, path: '/tasks' },
  { id: 'documents', name: 'Documents', icon: File, path: '/documents' },
  { id: 'reports', name: 'Reports', icon: BarChart3, path: '/reports' },
  { id: 'users', name: 'Users & Roles', icon: Users, path: '/users' },
];

export default function Sidebar() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-[#f1f2f3] z-50">
      {/* Logo */}
      <div className="h-[60px] flex items-center px-6">
        <div className="text-white font-bold text-xl">Tahwul</div>
      </div>

      {/* Navigation */}
      <nav className="px-4 mt-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.id}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-1 transition-all ${
                active
                  ? 'bg-sidebar-active text-white'
                  : 'text-sidebar-text hover:bg-sidebar-active/50 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-medium capitalize">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
