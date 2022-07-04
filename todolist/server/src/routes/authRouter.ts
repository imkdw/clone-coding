import express, { Request, Response } from "express";
import AuthService from "../service/authService";
import { dbError } from "../types/db.interface";
import { registerType } from "../types/auth.interface";

const authRouter = express.Router();

/** 회원가입 라우터 - /auth/register */
authRouter.post("/register", async (req: Request, res: Response) => {
  const userDTO = req.body;

  const userRecord: registerType & dbError = await AuthService.register(
    userDTO
  );

  if (userRecord.code) {
    res.status(400).json({ msg: userRecord.code });
    return;
  }

  res.status(200).json(userDTO);
});

export default authRouter;
