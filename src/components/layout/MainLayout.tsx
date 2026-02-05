import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSidebar } from "../../context/SidebarContext";

export default function MainLayout() {
  const { isCollapsed } = useSidebar();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <Header />
      <main
        className={`mt-[60px] p-4 sm:p-6 transition-all duration-300 ml-0 ${isCollapsed ? "sm:ml-16" : "sm:ml-56"}`}
      >
        <Outlet />
      </main>
    </div>
  );
}
