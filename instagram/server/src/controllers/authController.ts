import { Request, Response, NextFunction } from "express";

class AuthController {
  static login = (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    console.log(email, password);
    res.json({ message: "Success" });
  };

  static register = (req: Request, res: Response, next: NextFunction) => {
    const { email, name, nickname, password } = req.body;
    console.log(email, name, nickname, password);
    res.json({ message: "Success" });
  };
}

export default AuthController;
