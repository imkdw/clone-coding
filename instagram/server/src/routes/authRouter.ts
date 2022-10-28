import express from "express";
import AuthController from "./../controllers/authController";

const authRouter = express.Router();

authRouter.post("/login", AuthController.login);
authRouter.post("/register", AuthController.register);
authRouter.post("/check-logged-in", AuthController.checkLoggedIn);

export default authRouter;
