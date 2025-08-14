import { Router } from "express";
import { createBlog, fetchBlogById } from "../controllers/blog.controllers.js";
import verifyJWT from "../middlewares/auth.middleware.js";

const blogRouter = Router()

blogRouter.post("/create",verifyJWT,createBlog);
blogRouter.get("/:id",fetchBlogById);

export default blogRouter;