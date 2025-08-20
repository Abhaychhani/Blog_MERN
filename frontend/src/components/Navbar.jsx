import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "./ProfileNav.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Navbar = () => {
    const {isLoggedIn,logout} = useAuth();
    const navLinkStyles = "hover:text-[#7f5af0] transition capitalize"
    const navLinks = [
        {
            path:"/",
            text:"Home",
            styles:navLinkStyles,
        },
        {
            path:"/about",
            text:"about",
            styles:navLinkStyles,
        },
        {
            path:"/contact",
            text:"contact",
            styles:navLinkStyles,
        },
    ]
    
  return (
    <nav className="bg-[#0f0f1a] text-white px-6 h-[4.2rem] flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600 h-[5rem]">
        <img
          src="/logo.png"
          className="rotate-[50deg] h-full w-full object-cover"
        />
      </Link>

      {/* Routes */}
      <div className="flex items-center gap-6">
        {
            navLinks.map(link=>(
                <Link to={link.path} className={link.styles} key={link.path}>{link.text}</Link>
            ))
        }

        {/* Conditional Auth */}
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="bg-[#7f5af0] text-white px-4 py-2 rounded-full hover:bg-[#6246ea] transition"
          >
            Login
          </Link>
        ) : (
          <ProfileNav logout={logout}/>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
