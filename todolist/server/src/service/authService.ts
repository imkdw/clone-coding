import authModel from "../models/authModel";
import Jwt from "../Secure/jwt";
import Secure from "../Secure/secure";
import { registerType } from "../types/auth.interface";
import AuthValidate from "../validation/authValidate";

class AuthService {
  static register = async (userDTO: registerType) => {
    // 데이터 검증 로직
    const validUserId = AuthValidate.userId(userDTO.id);
    const validPassword = AuthValidate.password(userDTO.password);
    const validRePassword = AuthValidate.rePassword(
      userDTO.password,
      userDTO.rePassword
    );
    const validNickname = AuthValidate.nickname(userDTO.nickname);
    const validEmail = AuthValidate.email(userDTO.email);

    if (
      !validUserId ||
      !validPassword ||
      !validRePassword ||
      !validNickname ||
      !validEmail
    ) {
      return { code: "INVALID_ACCOUNT" };
    }

    // 비밀번호 암호화 로직
    userDTO.password = await Secure.hash(userDTO.password);

    try {
      const userRecord = await authModel.insertUser(userDTO);
      const accessToken = Jwt.createToken(userDTO.id);
      console.log(accessToken);

      return userRecord;
    } catch (err: any) {
      return err;
    }
  };
}

export default AuthService;
