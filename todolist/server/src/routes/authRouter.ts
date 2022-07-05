import express, { Request, Response } from "express";
import AuthService from "../service/authService";
import { dbError } from "../types/db.interface";
import { registerType } from "../types/auth.interface";

const authRouter = express.Router();

function responseError(status: number, res: Response, errCode: string) {
  res.status(400).json({ errCode });
}

/** 회원가입 라우터 - /auth/register */
authRouter.post("/register", async (req: Request, res: Response) => {
  const userDTO = req.body;

  const userRecord: registerType & dbError = await AuthService.register(
    userDTO
  );

  if (userRecord.code) {
    responseError(400, res, userRecord.code);
    return;
  }

  res.status(200).json({ id: userDTO.id });
});

export default authRouter;
