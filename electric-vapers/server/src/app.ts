import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import authRouter from "./routes/authRouter";
import postRouter from "./routes/postRouter";

dotenv.config();

const app = express();
app.set("port", process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

/** CORS 에러를 방지하기 위한 헤더 설정 */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRouter);
app.use("/post", postRouter);

app.listen(app.get("port"), () => {
  console.log("SERVER ON", app.get("port"));
});
