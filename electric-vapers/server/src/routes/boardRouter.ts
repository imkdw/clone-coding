import express from "express";
import { getFreeBoard, getFreeBoards, postFreeBoard } from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.post("/free", postFreeBoard);
boardRouter.get("/free", getFreeBoards);
boardRouter.get("/free/:boardId", getFreeBoard);
boardRouter.post("/comment/:boardId");

export default boardRouter;
