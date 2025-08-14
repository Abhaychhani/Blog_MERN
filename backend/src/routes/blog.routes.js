import { Router } from "express";
import { createBlog, deleteBlogById, fetchBlogById, fetchBlogsByUserId, updateBlogById } from "../controllers/blog.controllers.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const blogRouter = Router()

blogRouter.get("/:id",fetchBlogById);
blogRouter.get("/:userId",fetchBlogsByUserId);
blogRouter.post("/create",verifyJWT,createBlog);
blogRouter.patch("/:id",verifyJWT,updateBlogById);
blogRouter.delete("/:id",verifyJWT,deleteBlogById);

export default blogRouter;