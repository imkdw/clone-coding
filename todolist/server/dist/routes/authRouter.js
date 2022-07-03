"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter = express_1.default.Router();
/** 회원가입 라우터 - /auth/register */
authRouter.post("/register", (req, res) => {
    console.log(`[POST] /auth/register`);
    console.log(req.body);
    res.json({ msg: "msg" });
});
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map