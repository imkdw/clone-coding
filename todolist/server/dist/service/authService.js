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
const authValidate_1 = __importDefault(require("../validation/authValidate"));
class AuthService {
}
_a = AuthService;
AuthService.register = (userDTO) => __awaiter(void 0, void 0, void 0, function* () {
    if (!authValidate_1.default.userId(userDTO.id)) {
        return { code: "INVALID_USERID" };
    }
    try {
        const userRecord = yield authModel_1.default.insertUser(userDTO);
        return userRecord;
    }
    catch (err) {
        return err;
    }
});
exports.default = AuthService;
//# sourceMappingURL=authService.js.map