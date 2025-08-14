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
    if(!blog) return res.status(404).json({message:"Blog Not Found."});
    res.status(200).json({ message: "Blog fetched!" ,data:blog});
  } catch (error) {
    res.status(500).json({message:error.message});
  }
};

const updateBlogById = async (req, res) => {
  try {
    res.status(200).json({ message: "Blog Updated" });
  } catch (error) {
    console.log("Error while update Blog.");
  }
};

const deleteBlogById = async (req, res) => {
  try {
    res.status(200).json({ message: "Blog Deleted Successfully." });
  } catch (error) {
    console.log("Error while deleting Blog");
  }
};

export { createBlog ,fetchBlogById};
