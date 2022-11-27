import { OkPacket } from "mysql2";
import { LiquidReviewData } from "../types/review";
import { sendQuery } from "./promise";

/** 액상 리뷰 작성 */
export const insertReview = async (reviewData: LiquidReviewData): Promise<OkPacket[]> => {
  const { reviewId, author, type, title, introduce, content, division } = reviewData;
  const { volume, nicoVolume } = reviewData.info;
  const { sweet, mensol, neck, fresh } = reviewData.score;
  const query = `INSERT INTO liquid_review(review_id, author, type, title, volume, nico_volume, introduce, content, sweet, mensol, neck, fresh, division) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    reviewId,
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

/** 액상 리뷰 이미지 삽입 */
export const insertLiquidImage = async (reviewId: string, imageUrl: string): Promise<OkPacket[]> => {
  const query = `INSERT INTO liquid_review_images(review_id, image_url) VALUES(?, ?)`;
  const values = [reviewId, imageUrl];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

/** 리뷰 가져오기 */
export const getReviews = async (division: string) => {
  const query = `SELECT review_id, title, volume, nico_volume, introduce FROM liquid_review where division=? ORDER BY created_at DESC`;
  const value = [division];
  const queryResult = await sendQuery(query, value);
  return queryResult;
};

/** 리뷰 이미지 가져오기 */
export const getReviewImages = async (reviewId: string) => {
  const query = `SELECT * FROM liquid_review_images WHERE review_id=?`;
  const values = [reviewId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

/** 리뷰 상세정보 가져오기 */
interface IGetreviewReturn extends OkPacket, LiquidReviewData {}
export const getReview = async (reviewId: string): Promise<IGetreviewReturn[]> => {
  const query = "SELECT * FROM liquid_review WHERE review_id=?";
  const values = [reviewId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

/** 액상리뷰 업데이트 */
export const updateLiquidReview = async (newReviewData: LiquidReviewData) => {
  const { type, title, introduce, content, reviewId } = newReviewData;
  const { volume, nicoVolume } = newReviewData.info;
  const { sweet, mensol, neck, fresh } = newReviewData.score;
  const query =
    "UPDATE liquid_review SET type=?, title=?, volume=?, nico_volume=?, introduce=?, content=?, sweet=?, mensol=?, neck=?, fresh=? WHERE review_id=?";
  const values = [type, title, volume, nicoVolume, introduce, content, sweet, mensol, neck, fresh, reviewId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

/** 액상리뷰 삭제 */
export const dropLiquidReview = async (reviewId: string) => {
  const delelteComment = async () => {
    const query = "DELETE FROM liquid_review_comment WHERE review_id=?";
    const values = [reviewId];
    await sendQuery(query, values);
  };

  const deleteImage = async () => {
    const query = "DELETE FROM liquid_review_images WHERE review_id=?";
    const values = [reviewId];
    await sendQuery(query, values);
  };

  /** 댓글 삭제 */
  await delelteComment();

  /** 사진 삭제 */
  await deleteImage();

  /** 리뷰 삭제 */
  const query = "DELETE FROM liquid_review WHERE review_id=?";
  const values = [reviewId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

/** 닉네임 가져오기 */
interface IGetNicknameReturn extends OkPacket {
  nickname: string;
}
export const getNickname = async (email: string): Promise<IGetNicknameReturn[]> => {
  const query = "SELECT nickname FROM users where email=?";
  const values = [email];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

/** 액상리뷰 상세보기 댓글 작성 */
export const writeLiquidReviewComment = async (
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

/** 액상리뷰 상세보기 댓글 가져오기 */
export const selectLiquidReviewComment = async (reviewId: string) => {
  const query =
    "SELECT comment_id, nickname, created_at, text FROM liquid_review_comment WHERE review_id=? ORDER BY created_at ASC";
  const values = [reviewId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

/** 액상리뷰 댓글 삭제하기 */
export const dropLiquidReviewComment = async (commentId: string) => {
  const query = "DELETE FROM liquid_review_comment WHERE comment_id=?";
  const values = [commentId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

/** 이미지 갯수 가져오기 */
interface selectImageCountReturn extends OkPacket {
  count: number;
}
export const selectImageCount = async (reviewId: string): Promise<selectImageCountReturn[]> => {
  const query = "SELECT COUNT(*) as count FROM liquid_review_images WHERE review_id=?";
  const values = [reviewId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};
