import jwt from "jsonwebtoken";
import config from "../config/config";

class Jwt {
  static createToken(userId: string) {
    const payload = { userId };
    const secretKey = config.secure.jwtSecretKey;
    const options = {
      algorithm: config.secure.jwtAlgorithm,
      expiresIn: config.secure.jwtExpiresIn,
      issuer: config.secure.jwtIssuer,
    };
    console.log(payload, secretKey, options);
    return "access Token";

    jwt.sign(payload, secretKey, options);
  }
}

export default Jwt;
