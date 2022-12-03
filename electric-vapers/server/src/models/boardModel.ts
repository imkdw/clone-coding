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
