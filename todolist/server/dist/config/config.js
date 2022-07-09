"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    db: {
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
        dbName: process.env.DATABASE_DBNAME,
    },
    secure: {
        saltCount: 10,
    },
    jwt: {
        secretKey: String(process.env.JWT_SECRET_KEY),
        expiresIn: process.env.JWT_EXPIRES_IN,
        issuer: process.env.JWT_ISSUER,
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map