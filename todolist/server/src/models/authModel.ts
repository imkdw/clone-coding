import { insert } from "../db/db";
import { registerType } from "../types/auth.interface";

class authModel {
  static async insertUser(userDTO: registerType) {
    try {
      const userRecord = await insert(userDTO);
      return userRecord;
    } catch (err: any) {
      return err;
    }
  }
}

export default authModel;
