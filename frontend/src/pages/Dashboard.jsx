import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const { loggedIn } = useContext(AuthContext);

  if (!loggedIn) return <Navigate to="/" />;

  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
