import DashboardSidebar from '../../components/DashboardSidebar.jsx';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="flex h-[calc(100dvh-4.2rem)] bg-[#0F172A] text-slate-100 overflow-hidden">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout