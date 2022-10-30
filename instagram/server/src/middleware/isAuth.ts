import { Request, Response, NextFunction } from "express";
import Jwt from "../utility/jwt";

function isAuth(req: Request, res: Response, next: NextFunction) {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    res.status(401).json({ message: "Invalid AccessToken" });
    return;
  }

  try {
    const isValidToken = Jwt.verifyToken(accessToken);
    if (isValidToken) {
      const decodedToken = Jwt.decodeToken(accessToken);
      req.app.set("userInfo", decodedToken);
      next();
    } else {
      res.status(401).json({ message: "Verify Token Failed" });
    }
  } catch (err: any) {
    console.log(err.message);
    if (err.message === "jwt expired") {
      res.status(401).json({ message: "Expired Token" });
      return;
    }

    res.status(500).json({ message: "Internal Server Error" });
  }
}

export default isAuth;
