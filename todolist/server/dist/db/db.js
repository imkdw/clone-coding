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
Object.defineProperty(exports, "__esModule", { value: true });
exports.select = exports.insert = void 0;
const mysql_1 = __importDefault(require("mysql"));
const config_1 = __importDefault(require("../config/config"));
const connection = mysql_1.default.createConnection({
    host: config_1.default.db.host,
    user: config_1.default.db.username,
    password: config_1.default.db.password,
    database: config_1.default.db.dbName,
});
function insert(userDTO) {
    return __awaiter(this, void 0, void 0, function* () {
        const insertQuery = `INSERT INTO \
    users(userId, password, nickname, email) \
    values("${userDTO.id}", "${userDTO.password}", "${userDTO.nickname}", "${userDTO.email}")`;
        return new Promise((res, rej) => {
            connection.query(insertQuery, (err, results) => {
                if (err) {
                    rej(err);
                }
                res(userDTO);
            });
        });
    });
}
exports.insert = insert;
function select(userDTO, attr) {
    return __awaiter(this, void 0, void 0, function* () {
        const selectQuery = `SELECT FROM users WHERE ${attr}="${userDTO}"`;
        return new Promise((res, rej) => {
            connection.query(selectQuery, (err, results) => {
                if (err) {
                    rej(err);
                }
                res(results);
            });
        });
    });
}
exports.select = select;
//# sourceMappingURL=db.js.map