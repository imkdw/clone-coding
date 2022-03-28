"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = require("mongoose");
const app = (0, express_1.default)();
const port = 5000;
const mongoURL = "mongodb+srv://root:1234@cluster0.nk5oz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
    .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB Connected"))
    .catch((e) => console.error(e));
app.get("/", (req, res) => res.send("Hello"));
app.listen(port, () => console.log(`Port : ${port}`));
