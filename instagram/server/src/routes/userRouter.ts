import express from "express";
import UserController from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/user", UserController.getProfile);

export default userRouter;
