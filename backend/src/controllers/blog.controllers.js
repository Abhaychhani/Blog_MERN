import mongoose from "mongoose";
import Blog from "../models/blog.model.js";

const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const user = req.user;
    if (!user)
      return res.status(401).json({ message: "Login First (Unauthorize.)" });
    if (!title || !content)
      return res
        .status(400)
        .json({ message: "Title or Content Both required!" });

    const author = user._id;
    const newBlog = await Blog.insertOne({ title, content, author });

    res.status(200).json({ message: "blog created", newBlog });
  } catch (error) {
    console.log("Blog post creation failed!", error);
  }
};

const fetchBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog Not Found." });
    res.status(200).json({ message: "Blog fetched!", data: blog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateBlogById = async (req, res) => {
  try {
    const updatedBlog = await Blog.findOneAndUpdate(
      { _id: req.params.id, author: req.user.id },
      { $set: req.body },
      { new: true }
    );
    if (!updatedBlog) {
      return res
        .status(404)
        .json({ message: "post not found or Unauthorized:(" });
    }

    res.status(200).json({ message: "Blog Updated", updatedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlogById = async (req, res) => {
  try {
    const deletedBlog = await Blog.findOneAndDelete({
      _id: req.params.id,
      author: req.user.id,
    });
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found." });
    }
    res
      .status(200)
      .json({ message: "Blog Deleted Successfully.", deletedBlog });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const fetchBlogsByUserId = async (req, res) => {
  const {userId} = req.params;
  if(! mongoose.Types.ObjectId.isValid(userId)){
    return res.status(400).json({message:"Invalid id format."})
  }
  try {
    const fetchedBlogs = await Blog.find({author:userId});
    if(!fetchedBlogs){
      return res.status(404).json({message:"User not Found:("});
    }
    res.status(200).json({message:"Fetched Blogs Successfully:)",blogs:fetchedBlogs});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createBlog, fetchBlogById, updateBlogById, deleteBlogById, fetchBlogsByUserId };
