import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import AllBlogs from "./AllBlogs";
import CreatePost from "../components/CreatePost";

function Dashboard() {
  const { loggedIn, user } = useContext(AuthContext);

  if (!loggedIn) return <Navigate to="/" />;

  return (
    <div className="flex flex-col gap-4 p-2 pt-4 sm:px-8">
      <div className="flex items-center gap-4 rounded-sm px-2 py-4">
        <img src="profile.jpg" className="rounded-full h-32" />
        <div>
          <h1 className="uppercase font-extrabold text-4xl">{user.fullName}</h1>
          <span>{user.username}</span>
        </div>
      </div>
      <button className="default-btn">Edit Profile</button>
      <CreatePost/>
      <AllBlogs />
    </div>
  );
}

export default Dashboard;
