import { sendQuery } from "./promise";

interface IBoardData {
  author: string;
  nickname: string;
  title: string;
  content: string;
  postId: string;
}

export const createFreeBoard = async (boardData: IBoardData) => {
  const { author, nickname, title, content, postId } = boardData;
  const query = "INSERT INTO free_board(board_id, author, title, content, nickname) VALUES(?, ?, ?, ?, ?)";
  const values = [postId, author, title, content, nickname];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const readFreeBoards = async () => {
  const query = "SELECT * FROM free_board ORDER BY created_at DESC";
  const values = [];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const readFreeBoard = async (boardId: string) => {
  const query = "SELECT * FROM free_board WHERE board_id=?";
  const values = [boardId];
  const queryResult = sendQuery(query, values);
  return queryResult;
};

export const writeFreeBoardComment = async (
  commentId: string,
  reviewId: string,
  author: string,
  nickname: string,
  text: string
) => {
  const query =
    "INSERT INTO liquid_review_comment(comment_id, review_id, author, nickname, text) VALUES(?, ?, ?, ?, ?)";
  const values = [commentId, reviewId, author, nickname, text];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const selectFreeBoardComment = async (reviewId: string) => {
  const query =
    "SELECT comment_id, nickname, created_at, text FROM liquid_review_comment WHERE review_id=? ORDER BY created_at ASC";
  const values = [reviewId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const dropFreeBoardComment = async (commentId: string) => {
  const query = "DELETE FROM liquid_review_comment WHERE comment_id=?";
  const values = [commentId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};
