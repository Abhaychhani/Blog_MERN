import axios from "axios";
import { useState } from "react";
import { ORIGIN } from "../../../constants";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [message,setMessage]=useState(null);
  const createNewPost = async (e) => {
    e.preventDefault();
    const data = { title, content, description };
    try {
      const response = await axios.post(
        `${ORIGIN}/blogs/`,
        { ...data },
        { withCredentials: true }
      );
      if(response.status === 200){
        setTitle("");
        setContent("");
        setDescription("");
        setMessage(response.data.message);
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally{
      setTimeout(() => {
        setMessage(null);
        setError(null);
      }, 2000);
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form className="space-y-4" onSubmit={createNewPost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 border rounded h-20"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          type="submit"
        >
          Publish
        </button>
      </form>
      <p className={`${(error)?"text-red-500":"text-green-500"} text-center mt-2`}>{
      (error)? error : message
      }</p>
    </div>
  );
}
