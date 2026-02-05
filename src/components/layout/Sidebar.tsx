import { Link, useLocation } from "react-router-dom";
import { Home, FileText, User, File, BarChart3, Users, X } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

const navigationItems = [
  { id: "dashboard", name: "Dashboard", icon: Home, path: "/" },
  {
    id: "perspectives",
    name: "Perspectives",
    icon: FileText,
    path: "/perspectives",
  },
  { id: "tasks", name: "Tasks", icon: User, path: "/tasks" },
  { id: "documents", name: "Documents", icon: File, path: "/documents" },
  { id: "reports", name: "Reports", icon: BarChart3, path: "/reports" },
  { id: "users", name: "Users & Roles", icon: Users, path: "/users" },
];

export default function Sidebar() {
  const location = useLocation();
  const { isCollapsed, isMobileOpen, toggleSidebar, closeMobileSidebar } =
    useSidebar();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 sm:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileSidebar}
      />

      <aside
        className={`fixed left-0 top-0 h-screen bg-sidebar z-50 transition-all duration-300
          ${isMobileOpen ? "translate-x-0 w-56" : "-translate-x-full"}
          sm:translate-x-0 ${isCollapsed ? "sm:w-16" : "sm:w-56"}`}
      >
        {/* Mobile Close Button */}
        <button
          onClick={closeMobileSidebar}
          className="absolute top-4 right-4 sm:hidden w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Desktop Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="hidden sm:flex absolute -right-4 top-3.75 w-8 h-8 bg-white rounded-full items-center justify-center text-[#747A8B] shadow-md  transition-colors z-50 cursor-pointer hover:bg-gray-100"
        >
          {isCollapsed ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: "scaleX(-1)" }}
            >
              <path
                d="M2.66666 4V12M8.33132 8.00667V8.254C8.35799 10.2347 8.26799 10.9233 7.43466 10.6033L7.22932 10.4827L7.06332 10.3673L6.70666 10.092L6.03999 9.512L5.35799 8.93667L5.02466 8.63467L4.87599 8.48333L4.70132 8.23067L4.66532 8.00667L4.70132 7.784L4.87599 7.53067L5.02466 7.38L5.35799 7.078L6.03999 6.502L6.70666 5.922L7.06332 5.64733L7.22932 5.532L7.43466 5.41067C8.26799 5.09133 8.35799 5.77933 8.33132 7.76V8.00667ZM8.33132 8.00667H13.3333"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.66666 4V12M8.33132 8.00667V8.254C8.35799 10.2347 8.26799 10.9233 7.43466 10.6033L7.22932 10.4827L7.06332 10.3673L6.70666 10.092L6.03999 9.512L5.35799 8.93667L5.02466 8.63467L4.87599 8.48333L4.70132 8.23067L4.66532 8.00667L4.70132 7.784L4.87599 7.53067L5.02466 7.38L5.35799 7.078L6.03999 6.502L6.70666 5.922L7.06332 5.64733L7.22932 5.532L7.43466 5.41067C8.26799 5.09133 8.35799 5.77933 8.33132 7.76V8.00667ZM8.33132 8.00667H13.3333"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        {/* Logo */}
        <div className="h-[60px] flex items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span
              className={`text-white font-bold text-lg tracking-wide ${isCollapsed ? "sm:hidden" : ""}`}
            >
              TAHWUL
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-2 mt-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  if (window.innerWidth < 640) closeMobileSidebar();
                }}
                title={isCollapsed ? item.name : undefined}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg mb-1 transition-all ${
                  active
                    ? "bg-sidebar-active text-white"
                    : "text-sidebar-text hover:bg-sidebar-active/50 hover:text-white"
                } ${isCollapsed ? "sm:justify-center" : ""}`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span
                  className={`text-sm font-medium ${isCollapsed ? "sm:hidden" : ""}`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
