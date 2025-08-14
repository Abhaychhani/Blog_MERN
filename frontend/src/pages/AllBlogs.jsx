import { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post.jsx";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, serError] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_ORIGIN}/blogs?page=${page}`)
      .then((response) => {
        console.log(response);
        setBlogs(response.data.blogs);
      })
      .catch((error) => {
        serError(error.message);
      });
  }, [page]);

  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <h1 className="text-center text-3xl font-bold">All Blogs</h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog, index) => (
          <Post key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
}

export default AllBlogs;
