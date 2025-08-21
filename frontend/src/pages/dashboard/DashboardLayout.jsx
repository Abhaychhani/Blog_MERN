import DashboardSidebar from '../../components/DashboardSidebar.jsx';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#0F172A] text-slate-100">
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