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
        const secretKey = config_1.default.secure.jwtSecretKey;
        const options = {
            algorithm: config_1.default.secure.jwtAlgorithm,
            expiresIn: config_1.default.secure.jwtExpiresIn,
            issuer: config_1.default.secure.jwtIssuer,
        };
        console.log(payload, secretKey, options);
        return "access Token";
        jsonwebtoken_1.default.sign(payload, secretKey, options);
    }
}
exports.default = Jwt;
//# sourceMappingURL=jwt.js.map