import express from "express";
import PostController from "../controllers/postController";
import isAuth from "../middleware/isAuth";

const postRouter = express.Router();

postRouter.post("/add-post", isAuth, PostController.addPost);
postRouter.get("/posts", isAuth, PostController.getPosts);

export default postRouter;
