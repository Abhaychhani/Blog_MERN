import React, { useState } from "react";
import ReactQuill from "react-quill-new";

import "react-quill-new/dist/quill.snow.css"; //Toobar theme

function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3,4,5,6,false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(content);
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
        <button type="submit" className="default-btn">
          Publish Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
