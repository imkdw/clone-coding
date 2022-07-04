import authModel from "../models/authModel";
import { registerType } from "../types/auth.interface";
import AuthValidate from "../validation/authValidate";

class AuthService {
  static register = async (userDTO: registerType) => {
    if (!AuthValidate.userId(userDTO.id)) {
      return { code: "INVALID_USERID" };
    }

    try {
      const userRecord = await authModel.insertUser(userDTO);
      return userRecord;
    } catch (err: any) {
      return err;
    }
  };
}

export default AuthService;
