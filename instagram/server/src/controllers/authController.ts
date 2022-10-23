import { Request, Response, NextFunction } from "express";
import Secure from "../utility/secure";
import AuthModel from "../models/authModel";
import Jwt from "../utility/jwt";

class AuthController {
  static login = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO = req.body;
    const passwordQuery = await AuthModel.getPassword(userDTO.email);
    const hashedPassword = passwordQuery[0].password;

    if (Secure.comparePassword(hashedPassword, userDTO.password)) {
      const accessToken = Jwt.createToken(userDTO.email);
      const userQuery = await AuthModel.getUser(userDTO.email);

      if (userQuery) {
        const userInfo = {
          email: userQuery[0].email,
          name: userQuery[0].name,
          nickname: userQuery[0].nickname,
        };

        res.json({ accessToken, userInfo });
      }
    }
  };

  static register = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO = req.body;

    const hashPassword = await Secure.hashPassword(userDTO.password);
    userDTO.password = hashPassword;
    await AuthModel.insertUser(userDTO);
    res.json({ message: "Insert User Complete" });
  };

  static checkLoggedIn = async (req: Request, res: Response, next: NextFunction) => {
    const { accessToken } = req.body;
    const isTokenVerify = Jwt.verifyToken(accessToken);

    if (isTokenVerify) {
      res.json({ message: "LoggedIn User" });
    } else {
      res.status(400).json({ message: "Not LoggedIn User" });
    }
  };
}

export default AuthController;
