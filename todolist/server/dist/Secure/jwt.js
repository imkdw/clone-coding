"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
class Jwt {
    static createToken(userId) {
        const payload = { userId };
        const secretKey = config_1.default.jwt.secretKey;
        const options = {
            expiresIn: config_1.default.jwt.expiresIn,
            issuer: config_1.default.jwt.issuer,
        };
        const accessToken = jsonwebtoken_1.default.sign(payload, secretKey, options);
        return accessToken;
    }
}
exports.default = Jwt;
//# sourceMappingURL=jwt.js.map