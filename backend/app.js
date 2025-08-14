import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// routes import
import userRouter from "./src/routes/user.routes.js";
import blogRouter from "./src/routes/blog.routes.js";

// routes declaration
app.use("/user", userRouter);
app.use("/blogs", blogRouter);

export { app };
