import bcrypt from "bcrypt";
import { v4 } from "uuid";

class Secure {
  static hashPassword = async (plainPassword: string): Promise<string> => {
    return await bcrypt.hash(plainPassword, 12);
  };

  static comparePassword = async (
    plainPassword: string,
    hashedPassword: string
  ): Promise<boolean> => {
    return await bcrypt.compare(plainPassword, hashedPassword);
  };

  static getUUID = (): string => {
    return v4();
  };
}

export default Secure;
