import { Request, Response, NextFunction } from "express";
import { getUUID } from "../module/secure";
import { createFreeBoard, readFreeBoard, readFreeBoards } from "../models/boardModel";

export const postFreeBoard = async (req: Request, res: Response, next: NextFunction) => {
  const freeBoardData = req.body;
  freeBoardData.postId = getUUID();
  await createFreeBoard(freeBoardData);
  res.json("");
};

export const getFreeBoards = async (req: Request, res: Response, next: NextFunction) => {
  const freeBoardQuery = await readFreeBoards();
  const posts = freeBoardQuery.map((data) => {
    return {
      boardId: data.board_id,
      author: data.author,
      createdAt: data.created_at,
      title: data.title,
      content: data.content,
      nickname: data.nickname,
    };
  });

  res.json(posts);
};

export const getFreeBoard = async (req: Request, res: Response, next: NextFunction) => {
  const { boardId } = req.params;
  const boardQuery = await readFreeBoard(boardId);
  const boardData = {
    boardId: boardQuery[0].board_id,
    author: boardQuery[0].author,
    createdAt: boardQuery[0].created_at,
    title: boardQuery[0].title,
    content: boardQuery[0].content,
    nickname: boardQuery[0].nickname,
  };
  res.json(boardData);
};
