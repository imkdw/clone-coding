import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import authRouter from "./routes/authRouter";

dotenv.config();

const app = express();
app.set("port", process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/auth", authRouter);

app.listen(app.get("port"), () => {
  console.log("SERVER ON", app.get("port"));
});
