import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiEdit, FiBarChart2,FiPlusCircle, FiSettings } from "react-icons/fi";

export default function DashboardSidebar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Home", icon: <FiHome />, path: "/dashboard" },
     { label: 'Create', icon: <FiPlusCircle />, path: '/dashboard/create' },
    { label: "manage", icon: <FiEdit />, path: "/dashboard/posts" },
    { label: "Analytics", icon: <FiBarChart2 />, path: "/dashboard/analytics" },
    { label: "Settings", icon: <FiSettings />, path: "/dashboard/settings" },
  ];

  return (
    <aside className="bg-[#1E293B] text-slate-100 h-screen w-16 md:w-64 transition-all duration-300 flex flex-col py-6 shadow-lg">
      <div className="flex flex-col gap-4 px-3 md:px-4">
        {navItems.map(({ label, icon, path }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={label}
              to={path}
              className={`flex items-center gap-4 px-3 py-2 rounded-lg transition-colors capitalize
                ${isActive ? "bg-indigo-600 text-white" : "hover:bg-slate-700"}
                ${isMobile ? "justify-center" : "justify-start"}
              `}
            >
              <span className="text-xl">{icon}</span>
              {!isMobile && (
                <span className="text-sm font-medium">{label}</span>
              )}
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
