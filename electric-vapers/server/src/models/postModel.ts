import { OkPacket } from "mysql2";
import { LiquidReviewData } from "../types/post";
import { sendQuery } from "./promise";

/**
 * 액상 리뷰를 작성하는 쿼리
 * @param postData {LiquidReviewData} 액상 리뷰를 작성하기 위한 데이터들
 */
export const insertPost = async (postData: LiquidReviewData): Promise<OkPacket[]> => {
  const { postId, author, type, title, introduce, content, division } = postData;
  const { volume, nicoVolume } = postData.info;
  const { sweet, mensol, neck, fresh } = postData.score;
  const query = `INSERT INTO liquid_review(post_id, author, type, title, volume, nico_volume, introduce, content, sweet, mensol, neck, fresh, division) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    postId,
    author,
    type,
    title,
    volume,
    nicoVolume,
    introduce,
    content,
    sweet,
    mensol,
    neck,
    fresh,
    division,
  ];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const insertMtlLiquidImage = async (postId: string, imageUrl: string): Promise<OkPacket[]> => {
  const query = `INSERT INTO liquid_review_images(post_id, image_url) VALUES(?, ?)`;
  const values = [postId, imageUrl];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const getPosts = async (division: string) => {
  const query = `SELECT post_id, title, volume, nico_volume, introduce FROM liquid_review where division=? ORDER BY created_at DESC`;
  const value = [division];
  const queryResult = await sendQuery(query, value);
  return queryResult;
};

export const getPostImages = async (postId: string) => {
  const query = `SELECT * FROM liquid_review_images WHERE post_id=?`;
  const values = [postId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

interface IGetPostReturn extends OkPacket, LiquidReviewData {}

export const getPost = async (postId: string): Promise<IGetPostReturn[]> => {
  const query = "SELECT * FROM liquid_review WHERE post_id=?";
  const values = [postId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

interface IGetNicknameReturn extends OkPacket {
  nickname: string;
}

export const getNickname = async (email: string): Promise<IGetNicknameReturn[]> => {
  const query = "SELECT nickname FROM users where email=?";
  const values = [email];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const writeLiquidReviewComment = async (postId: string, author: string, nickname: string, text: string) => {
  const query = "INSERT INTO liquid_review_comment(post_id, author, nickname, text) VALUES(?, ?, ?, ?)";
  const values = [postId, author, nickname, text];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const selectLiquidReviewComment = async (postId: string) => {
  const query = "SELECT nickname, created_at, text FROM liquid_review_comment WHERE post_id=?";
  const values = [postId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};
