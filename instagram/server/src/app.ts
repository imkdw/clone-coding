import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";

import authRouter from "./routes/authRouter";

dotenv.config();

const app = express();
app.set("port", process.env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/auth", authRouter);

app.listen(app.get("port"), () => {
  console.log("Server on", app.get("port"));
});
