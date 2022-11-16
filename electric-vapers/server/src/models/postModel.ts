import { OkPacket } from "mysql2";
import { mtlLiquidData } from "../types/post";
import { sendQuery } from "./promise";

export const insertPost = async (postData: mtlLiquidData): Promise<OkPacket[]> => {
  const { postId, author, type, name, introduce, content, division } = postData;
  const { volume, nicoVolume } = postData.info;
  const { sweet, mensol, neck, fresh } = postData.score;
  const query = `INSERT INTO liquid_review(post_id, author, type, name, volume, nico_volume, introduce, content, sweet, mensol, neck, fresh, division) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [
    postId,
    author,
    type,
    name,
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
  const query = `SELECT post_id, name, volume, nico_volume, introduce FROM liquid_review where division=? ORDER BY created_at DESC`;
  const value = [division];
  const queryResult = await sendQuery(query, value);
  return queryResult;
};

export const getPostImage = async (postId: string) => {
  const query = `SELECT * FROM liquid_review_images WHERE post_id=?`;
  const values = [postId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};
