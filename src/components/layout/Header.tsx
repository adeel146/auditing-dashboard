import { Search, Bell, ChevronDown, Menu } from "lucide-react";
import { useSidebar } from "../../context/SidebarContext";

export default function Header() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <header
      className={`fixed top-0 right-0 h-15 bg-white border-b border-border z-40 transition-all duration-300 left-0 ${
        isCollapsed ? "sm:left-16" : "sm:left-56"
      }`}
    >
      <div className="h-full flex items-center justify-between px-3 sm:px-6">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="sm:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5 text-primary" />
        </button>

        {/* Left - Search */}
        <div className="flex items-center flex-1 sm:flex-none">
          <div className="relative w-full sm:w-auto">
            <div className="flex sm:ml-8.5 items-center gap-2 bg-[#F8FAFC] border border-border rounded-lg px-3 sm:px-4 py-2 w-full sm:w-72">
              <Search className="w-4 h-4 text-secondary" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-primary placeholder-secondary outline-none flex-1 min-w-0"
              />
            </div>
          </div>
        </div>

        {/* Right - Notifications & Profile */}
        <div className="flex items-center gap-2 sm:gap-4 ml-2 sm:ml-0">
          <div className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-secondary" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-error rounded-full"></span>
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-full px-2 sm:px-3 py-1.5 transition-colors">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="hidden sm:inline text-sm font-medium text-primary">
              Mohamed
            </span>
            <ChevronDown className="hidden sm:block w-4 h-4 text-secondary" />
          </div>
        </div>
      </div>
    </header>
  );
}
