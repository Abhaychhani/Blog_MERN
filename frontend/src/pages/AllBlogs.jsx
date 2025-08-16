import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import Pagination from "../components/Pagination.jsx";

function AllBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, serError] = useState(null);
  const [currPage, setCurrPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const fecthBlogsByPageNumber = async (pageNum) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_ORIGIN}/blogs?page=${pageNum}`
      );
      console.log(response);
      setCurrPage(response.data.page);
      setTotalPages(response.data.totalPages);
      setBlogs(response.data.blogs);
    } catch (error) {
      serError(error.message);
    }
  };

  useEffect(() => {
    fecthBlogsByPageNumber(currPage);
  }, [currPage]);

  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center gap-8 w-full border py-8">
      <h1 className="text-center text-3xl font-bold">All Blogs</h1>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8">
        {blogs.map((blog, index) => (
          <Card key={index} blog={blog} />
        ))}
      </div>
      <Pagination props={{currPage,setCurrPage,totalPages}} />
    </div>
  );
}

export default AllBlogs;
