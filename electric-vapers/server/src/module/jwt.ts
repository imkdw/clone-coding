import jwt from "jsonwebtoken";
import { jwtConfig } from "../config";

export const createToken = (email: string, nickname: string) => {
  const { secretKey, expiresIn } = jwtConfig;

  if (secretKey && expiresIn) {
    return jwt.sign({ email, nickname }, secretKey, { expiresIn });
  }
};

export const decodeToken = (accessToken: string) => {
  const { secretKey } = jwtConfig;

  if (secretKey) {
    return jwt.decode(accessToken, secretKey);
  }
};
