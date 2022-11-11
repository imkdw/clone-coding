import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtConfig } from "../config";

export const createToken = (email: string, nickname: string) => {
  const { secretKey, expiresIn } = jwtConfig;

  if (secretKey && expiresIn) {
    return jwt.sign({ email, nickname }, secretKey, { expiresIn });
  }
};

interface decodeTokenReturns extends JwtPayload {
  email: string;
  nickname: string;
}

export const decodeToken = (accessToken: string): decodeTokenReturns => {
  try {
    const decodedToken = jwt.decode(accessToken) as decodeTokenReturns;
    return decodedToken;
  } catch (err: any) {
    console.error(err.message);
    return {
      email: "",
      nickname: "",
    };
  }
};
