"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const authModel_1 = __importDefault(require("../models/authModel"));
const jwt_1 = __importDefault(require("../Secure/jwt"));
const secure_1 = __importDefault(require("../Secure/secure"));
const authValidate_1 = __importDefault(require("../validation/authValidate"));
class AuthService {
}
_a = AuthService;
AuthService.register = (userDTO) => __awaiter(void 0, void 0, void 0, function* () {
    // 데이터 검증 로직
    const validUserId = authValidate_1.default.userId(userDTO.id);
    const validPassword = authValidate_1.default.password(userDTO.password);
    const validRePassword = authValidate_1.default.rePassword(userDTO.password, userDTO.rePassword);
    const validNickname = authValidate_1.default.nickname(userDTO.nickname);
    const validEmail = authValidate_1.default.email(userDTO.email);
    if (!validUserId ||
        !validPassword ||
        !validRePassword ||
        !validNickname ||
        !validEmail) {
        return { code: "INVALID_ACCOUNT" };
    }
    // 비밀번호 암호화 로직
    userDTO.password = yield secure_1.default.hash(userDTO.password);
    try {
        const userRecord = yield authModel_1.default.insertUser(userDTO);
        const accessToken = jwt_1.default.createToken(userDTO.id);
        console.log(accessToken);
        return userRecord;
    }
    catch (err) {
        return err;
    }
});
exports.default = AuthService;
//# sourceMappingURL=authService.js.map