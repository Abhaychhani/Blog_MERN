import { Router } from "express";
import { checkAuth, loginUser, logoutUser, registerUser } from "../controllers/user.controllers.js";
import verifyJWT from "../middlewares/auth.middleware.js";
import { fetchBlogsByUserId } from "../controllers/blog.controllers.js";

const router = Router()
router.route("/:id").get(fetchBlogsByUserId);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
// secured route
router.route("/check-auth").get(verifyJWT,checkAuth);
router.route("/logout").post(verifyJWT, logoutUser);

export default router;