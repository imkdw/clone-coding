import express from "express";
import PostController from "../controllers/postController";

const postRouter = express.Router();

postRouter.post("/add-post", PostController.addPost);

export default postRouter;
