import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import config from "./../config/config";

dotenv.config();

class Jwt {
  static createToken = (email: string): string => {
    const { secretKey, expiresIn } = config.jwt;
    return jwt.sign({ email }, secretKey, { expiresIn });
  };

  static verifyToken = (accessToken: string): string => {
    const { secretKey } = config.jwt;
    return jwt.verify(accessToken, secretKey);
  };

  static decodeToken = (accessToken: string) => {
    const { secretKey } = config.jwt;
    return jwt.decode(accessToken, secretKey);
  };
}

export default Jwt;
