export default function Register() {
  return (
    <div className="min-h-screen bg-[#0F172A] flex items-center justify-center px-4">
      <div className="bg-[#1E293B] p-8 rounded-xl shadow-lg w-full max-w-md text-slate-100">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-6">Register</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 bg-slate-800 text-slate-100 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
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
            Register
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{' '}
          <a href="/login" className="text-indigo-400 hover:underline transition">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
