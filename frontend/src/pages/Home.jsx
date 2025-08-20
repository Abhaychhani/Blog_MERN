// Add to Navbar.jsx or Home.jsx
import { useAuth } from "../context/AuthContext.jsx";


export default function Home() {
  const { login } = useAuth();
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-lg">Explore articles, ideas, and insights.</p>

      <button
        onClick={login}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Login
      </button>
    </div>
  );
}
