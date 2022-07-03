import express, { Request, Response } from "express";

const authRouter = express.Router();

/** 회원가입 라우터 - /auth/register */
authRouter.post("/register", (req: Request, res: Response) => {
  console.log(`[POST] /auth/register`);

  console.log(req.body);

  res.json({ msg: "msg" });
});

export default authRouter;
