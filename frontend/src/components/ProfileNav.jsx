import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function ProfileNav({ logout }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinksStyle =
    "block px-4 py-2 hover:bg-[#2c2c3f] text-[#94a1b2] capitalize";
  const navLinks = [
    {
      path: "/profile",
      text: "profile",
      styles: navLinksStyle,
    },

    {
      path: "/dashboard/settings",
      text: "settings",
      styles: navLinksStyle,
    },
    {
      path: "/dashboard",
      text: "dashboard",
      styles: navLinksStyle,
    },
  ];

  return (
    <>
      <div className="relative" ref={dropdownRef}>
        <button onClick={toggleDropdown}>
          <img
            src="/default_user.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-[#7f5af0] cursor-pointer"
          />
        </button>

        {/* Dropdown */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-48 bg-[#1f1f2e] rounded-md shadow-lg z-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={link.styles}
                onClick={() => setShowDropdown(false)}
              >
                {link.text}
              </Link>
            ))}
            <button
              className="block w-full text-left px-4 py-2 hover:bg-[#2c2c3f] text-[#ff6b6b]"
              onClick={() => {
                logout();
                setShowDropdown(false);
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileNav;
