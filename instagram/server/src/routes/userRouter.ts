import express from "express";
import UserController from "../controllers/userController";
import isAuth from "../middleware/isAuth";

const userRouter = express.Router();

userRouter.get("/profile", isAuth, UserController.getProfile);
userRouter.post("/search", isAuth, UserController.searchUser);
// userRouter.post("/search", isAuth, UserController.searchUser);

export default userRouter;
