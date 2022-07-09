import { insert, select } from "../db/db";
import { registerType } from "../types/auth.interface";

class AuthModel {
  static async insertUser(userDTO: registerType) {
    try {
      const userRecord = await insert(userDTO);
      return userRecord;
    } catch (err: any) {
      return err;
    }
  }

  static async searchAccount(userDTO: string, attr: string) {
    try {
      const userRecord = await select(userDTO, attr);
      return userRecord;
    } catch (err: any) {
      return err;
    }
  }
}

export default AuthModel;
