import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Profile from "./Profile";

function Navbar() {
  const { loggedIn,logout } = useContext(AuthContext);
  const navLinks = [
    { id: 1, route: "/", link: "Home" },
    { id: 2, route: "/blogs", link: "Blogs" },
    { id: 3, route: "/news", link: "News" },
    { id: 4, route: "/about", link: "About" },
    { id: 5, route: "/contact", link: "Contact" },
  ];
  return (
    <nav className="flex bg-violet-600 text-white justify-between items-center px-16 h-16">
      <div className="text-2xl font-serif font-extrabold">Blog Logo</div>
      <ul className="flex items-center gap-4">
        {navLinks.map((navlink) => (
          <li key={navlink.id} className="cursor-pointer">
            <Link to={navlink.route}>{navlink.link}</Link>
          </li>
        ))}

        {loggedIn ? (
          <Profile logout={logout}/>
        ) : (
          <button className="bg-white text-violet-700 px-4 cursor-pointer rounded-3xl">
            <Link to="/login">Login</Link>
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
