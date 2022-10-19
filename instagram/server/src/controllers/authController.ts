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
      const token = Jwt.createToken(userDTO.email);
      res.json({ message: "Login Success", accessToken: token });
    }
  };

  static register = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO = req.body;

    const hashPassword = await Secure.hashPassword(userDTO.password);
    userDTO.password = hashPassword;
    const registerRecord = await AuthModel.insertUser(userDTO);
    res.json({ message: "Insert User Complete" });
  };
}

export default AuthController;
