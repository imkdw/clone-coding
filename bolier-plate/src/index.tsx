import express, { Request, Response } from "express";
const mongoose = require("mongoose");
const app = express();
const port = 5000;

const mongoURL =
  "mongodb+srv://root:1234@cluster0.nk5oz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((e: any) => console.error(e));

app.get("/", (req: Request, res: Response) => res.send("Hello"));
app.listen(port, () => console.log(`Port : ${port}`));
