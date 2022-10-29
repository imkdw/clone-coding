import express from "express";
import UserController from "../controllers/userController";
import isAuth from "../middleware/isAuth";

const userRouter = express.Router();

userRouter.get("/profile", isAuth, UserController.getProfile);

export default userRouter;
