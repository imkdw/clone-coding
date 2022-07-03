"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
/** 라우터 정의 */
const authRouter_1 = __importDefault(require("./routes/authRouter"));
const todoRouter_1 = __importDefault(require("./routes/todoRouter"));
const app = (0, express_1.default)();
app.set("port", process.env.PORT || "5000");
/** 미들웨어 정의 */
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use("/auth", authRouter_1.default);
app.use("/todo", todoRouter_1.default);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.listen(app.get("port"), () => {
    console.log(`SERVER PORT : ${app.get("port")}`);
});
//# sourceMappingURL=app.js.map