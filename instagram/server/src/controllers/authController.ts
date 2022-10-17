import { Request, Response, NextFunction } from "express";

class AuthController {
  static login = (req: Request, res: Response, next: NextFunction) => {
    const { id, password } = req.body;
    console.log(id, password);
  };
}

export default AuthController;
