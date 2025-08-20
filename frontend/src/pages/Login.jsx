import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const {isLoggedIn} = useAuth();
  const navigate = useNavigate();
  useEffect(()=>{
    if(isLoggedIn){
      navigate("/dashboard");
    }
  },[isLoggedIn,navigate])

  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      <div className="bg-[#1E293B] p-8 rounded-xl shadow-lg w-full max-w-md text-slate-100">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">Login</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg hover:scale-105 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Don't have an account?{' '}
          <a href="/register" className="text-indigo-400 hover:underline transition">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
