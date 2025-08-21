import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center px-3 py-1 rounded-md shadow-md transition-all duration-300 ease-in-out border
        ${
          focused
            ? "bg-gray-700 scale-105 border-white searchBar-shadow"
            : "bg-gray-800 scale-100 border-[#fff5]"
        }`}
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Search..."
        className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full transition-all duration-300"
      />
      <button
        type="submit"
        className="ml-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
      >
        <CiSearch size={22} color="white" />
      </button>
    </form>
  );
};

export default SearchBar;
