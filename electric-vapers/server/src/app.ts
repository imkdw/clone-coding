import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import multer from "multer";

import authRouter from "./routes/authRouter";
import reviewRouter from "./routes/reviewRouter";
import boardRouter from "./routes/boardRouter";

dotenv.config();

const app = express();
app.set("port", process.env.PORT || 5000);

/** CORS 에러를 방지하기 위한 헤더 설정 */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const storage = multer.memoryStorage();

/** 미들웨어 설정 */
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "1mb" }));
app.use(morgan("dev"));
app.use(multer({ storage }).fields([{ name: "file", maxCount: 8 }]));

/** 라우터 설정 */
app.use("/auth", authRouter);
app.use("/review", reviewRouter);
app.use("/board", boardRouter);

/** 서버 오픈 */
app.listen(app.get("port"), () => {
  console.log("SERVER ON", app.get("port"));
});
