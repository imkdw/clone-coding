import bcrypt from "bcrypt";
import config from "../config/config";

class Secure {
  static async hash(password: string) {
    const hashedPassword = await bcrypt.hash(password, config.secure.saltCount);
    return hashedPassword;
  }
}

export default Secure;
