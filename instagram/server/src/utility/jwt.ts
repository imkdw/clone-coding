import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import config from "./../config/config";

dotenv.config();

class Jwt {
  static createToken = (email: string): string => {
    const { secretKey, expiresIn } = config.jwt;
    return jwt.sign({ email }, secretKey, { expiresIn });
  };
}

export default Jwt;
