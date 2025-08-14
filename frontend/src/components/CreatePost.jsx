import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css"; //Toobar theme
import axios from "axios";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(null);
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, content };
    if (!title) {
      setError("Title Must be filled.");
    } else if (!content) {
      setError("Content Must be filled.");
    } else {
      setError(null);
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_ORIGIN}/blogs/create/`,
        { ...data },
        { withCredentials: true }
      );
      alert(res.data.message);
      setTitle("");
      setContent("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col gap-4  w-full h-full">
      <h1 className="text-center font-extrabold uppercase mt-2">Create post</h1>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4"
      >
        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="w-[280px] outline-none border"
        />
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={modules}
          placeholder="Write your post"
        />
        <span className="text-red-600">{error}</span>
        <button type="submit" className="default-btn">
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
