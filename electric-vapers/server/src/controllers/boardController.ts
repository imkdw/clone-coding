import { Request, Response, NextFunction } from "express";
import { getUUID } from "../module/secure";
import {
  createFreeBoard,
  dropFreeBoardComment,
  readFreeBoard,
  readFreeBoards,
  selectFreeBoardComment,
  writeFreeBoardComment,
} from "../models/boardModel";
import { snakeToCamel } from "../module/util";

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

/** 리뷰 상세정보 댓글 작성하기 */
export const postFreeBoardComment = async (req: Request, res: Response, next: NextFunction) => {
  const { reviewId, comment } = req.body;
  const { author, nickname, text } = comment;
  const commentId = getUUID();
  await writeFreeBoardComment(commentId, reviewId, author, nickname, text);
  res.json("");
};

/** 리뷰 상세정보 댓글 가져오기 */
export const getFreeBoardComment = async (req: Request, res: Response, next: NextFunction) => {
  const { reviewId } = req.params;
  const commentQuery = await selectFreeBoardComment(reviewId);
  const comments = [];

  /** 댓글이 없는경우 빈배열 반환 */
  if (commentQuery.length === 0) {
    res.json([]);
    return;
  }

  commentQuery.forEach((comment) => {
    const commentItem = {};
    for (const item in comment) {
      const key = snakeToCamel(item);
      commentItem[key] = comment[item];
    }
    comments.push(commentItem);
  });

  res.json({ comment: comments });
};

/** 리뷰 상세정보 댓글 삭제하기 */
export const deleteFreeBoardComment = async (req: Request, res: Response, next: NextFunction) => {
  const { commentId } = req.params;
  await dropFreeBoardComment(commentId);
  res.json("");
};
