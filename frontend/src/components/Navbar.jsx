import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileNav from "./ProfileNav.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import SearchBar from "./SearchBar.jsx";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <nav className="bg-[#0f0f1a] text-white px-6 h-[4.2rem] flex justify-between items-center shadow-md">
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-blue-600 h-[5rem]">
        <img
          src="/logo.png"
          className="rotate-[50deg] h-full w-full object-cover"
        />
      </Link>
      <SearchBar/>

        {/* Conditional Auth */}
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="bg-[#7f5af0] text-white px-4 py-2 rounded-full hover:bg-[#6246ea] transition"
          >
            Login
          </Link>
        ) : (
          <ProfileNav logout={logout} />
        )}
    </nav>
  );
};

export default Navbar;
