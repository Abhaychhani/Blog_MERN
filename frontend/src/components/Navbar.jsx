import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkStyle =
    "block px-4 py-2 text-gray-700 hover:text-blue-600 transition";
  const activeStyle = "block px-4 py-2 text-blue-600 transition";

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          MyBlog
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
          >
            Dashboard
          </NavLink>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? activeStyle : linkStyle)}
            onClick={() => setIsOpen(false)}
          >
            Dashboard
          </NavLink>
        </div>
      )}
    </nav>
  );
}
