import { Router } from "express";
import { createBlog, deleteBlogById, fetchBlogById, fetchBlogs, updateBlogById } from "../controllers/blog.controllers.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const blogRouter = Router()

blogRouter.get("/",fetchBlogs);
blogRouter.get("/:id",fetchBlogById);
blogRouter.post("/",verifyJWT,createBlog);
blogRouter.patch("/:id",verifyJWT,updateBlogById);
blogRouter.delete("/:id",verifyJWT,deleteBlogById);

export default blogRouter;