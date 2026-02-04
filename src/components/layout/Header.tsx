import { Search, Bell, ChevronDown, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  showBackButton?: boolean;
}

export default function Header({ showBackButton = false }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const showBack = showBackButton || location.pathname !== '/';

  return (
    <header className="fixed top-0 left-64 right-0 h-[60px] bg-white border-b border-border z-40">
      <div className="h-full flex items-center justify-between px-6">
        {/* Left - Back button & Search */}
        <div className="flex items-center gap-4">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="w-8 h-8 flex items-center justify-center bg-white rounded-2xl shadow-sm hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-secondary" />
            </button>
          )}
          
          <div className="relative">
            <div className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-2 w-80">
              <Search className="w-4 h-4 text-secondary" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-sm text-secondary placeholder-secondary outline-none flex-1 capitalize"
              />
            </div>
          </div>
        </div>

        {/* Right - Notifications & Profile */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Bell className="w-4 h-4 text-secondary cursor-pointer hover:text-primary transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
          </div>

          <div className="flex items-center gap-2 bg-[#f9fafa] rounded-full px-2 py-1 cursor-pointer hover:bg-border transition-colors">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-xs font-medium text-primary">Mohamed</span>
            <ChevronDown className="w-3 h-3 text-secondary" />
          </div>
        </div>
      </div>
    </header>
  );
}
