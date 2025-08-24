import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import axios from "axios";
import { ORIGIN } from "../../../constants.js";


export default function ManagePosts() {
  const {posts,setPosts} = useAuth();
  const [loading,setLoading] = useState(true);
  const {user} = useAuth()

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${ORIGIN}/blogs/${user.username}/${user._id}`);
      if(response.status === 200){
        setPosts(response.data.blogs);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }  
    finally{
      setLoading(false);
    }  
  }
  useEffect(()=>{
    fetchPosts();
  },[]);

  if(loading){
    return  <h1>Loading...</h1>
  }

  return (
    <div className="p-8 h-full">
      <h2 className="text-2xl font-semibold mb-4">Manage Posts</h2>
      <ul className="space-y-4">
        {(posts && posts.length) ? posts.map((post,index) => (
          <li key={index} className="flex justify-between items-center border p-4 rounded">
            <span>{post.title}</span>
            <div className="space-x-2">
              <button className="text-blue-600 hover:underline">Edit</button>
              <button className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        )):"Post Not Created Yet!"}
      </ul>
    </div>
  );
}
