import { Request, Response, NextFunction } from "express";
import UserModel from "../models/userModel";
import Jwt from "../utility/jwt";

class UserController {
  static getProfile = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.headers.authorization;

    if (accessToken) {
      const decodedToken = Jwt.decodeToken(accessToken);
      const profileQuery = await UserModel.getUserProfile(decodedToken.email);
      const { email, name, nickname, profile, introduce } = profileQuery[0];

      res.json({ email, name, nickname, profile, introduce });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  };
}

export default UserController;
