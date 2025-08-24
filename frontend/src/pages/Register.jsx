import { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import axios from "axios";
import { ORIGIN } from "../../constants.js";

export default function Register() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${ORIGIN}/users/register`, {
        fullName,
        email,
        password,
      });
      if (response.status === 200) {
        setFullName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      }
    } catch (error) {
      setError(error.message || "User Registration Failed!!");
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      <div className="bg-[#1E293B] p-8 rounded-xl shadow-lg w-full max-w-md text-slate-100">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">
          Register
        </h2>

        <form className="space-y-4" method="post" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Fullname"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-indigo-400 hover:underline transition"
          >
            Login
          </Link>
        </p>
      </div>
      <p className="text-rose-500 capitalize">{error}</p>
    </div>
  );
}
