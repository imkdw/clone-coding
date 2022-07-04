import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

/** 라우터 정의 */
import authRouter from "./routes/authRouter";
import todoRouter from "./routes/todoRouter";

const app = express();
app.set("port", process.env.PORT || "5000");

/** 미들웨어 정의 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use("/auth", authRouter);
app.use("/todo", todoRouter);

app.listen(app.get("port"), () => {
  console.log(`SERVER PORT : ${app.get("port")}`);
});
