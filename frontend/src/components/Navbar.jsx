import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Profile from "./Profile";

function Navbar() {
  const { loggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="flex bg-violet-600 text-white justify-between items-center px-16 h-16">
      <div className="text-2xl font-serif font-extrabold">
        <Link to="/">Storious</Link>
      </div>
      <ul className="flex items-center gap-4">
        {loggedIn ? (
          <Profile logout={logout} />
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
