import { Request, Response, NextFunction } from "express";
import Secure from "../utility/secure";
import AuthModel from "../models/authModel";
import Jwt from "../utility/jwt";

class AuthController {
  /**
   * 로그인을 처리하는 컨트롤러
   * @returns 유저의 이메일, 이름, 닉네임을 json 형태로 반환
   */
  static login = async (req: Request, res: Response, next: NextFunction) => {
    const userDTO = req.body;
    const passwordQuery = await AuthModel.getPassword(userDTO.email);
    const hashedPassword = passwordQuery[0].password;

    /** 평문 비밀번호와 hash로 암호화된 비밀번호를 비교 */
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
    const accessToken = req.headers.authorization;
    if (Jwt.verifyToken(accessToken)) {
      const decodedToken = Jwt.decodeToken(accessToken);
      const userQuery = await AuthModel.getUser(decodedToken.email);

      if (userQuery) {
        const userInfo = {
          email: userQuery[0].email,
          name: userQuery[0].name,
          nickname: userQuery[0].nickname,
        };

        res.json(userInfo);
      }
    } else {
      res.status(401).json({ message: "Unauthorization" });
    }
  };
}

export default AuthController;
