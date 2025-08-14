import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const sidebarLinks = [
    {
      id: 1,
      text: "Create Post",
      path:"/dashboard/create-post",
    },
    {
        id: 2,
        text: "Analytics",
        path:"/dashboard/analytics",
    },
    {
        id: 3,
        text: "All Blogs",
        path:"/dashboard/blogs",
    },
  ];
  return (
    <div className="w-[200px] h-[calc(100vh-4rem)] bg-violet-700">
      <ul>
        {sidebarLinks.map((link) => (
          <li key={link.id} className="text-white  pl-4">
            <Link to={link.path}>
            {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
