import express from "express";
import { checkLoggedIn, login, register } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/check-logged-in", checkLoggedIn);

export default authRouter;
