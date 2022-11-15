import { OkPacket } from "mysql2";
import { mtlLiquidData } from "../types/post";
import { sendQuery } from "./promise";

const MTL_REVIEW_TABLE = "mtl_liquid_review";
const MTL_REVIEW_IMAGE_TABLE = "mtl_liquid_review_images";

export const insertPost = async (postData: mtlLiquidData): Promise<OkPacket[]> => {
  const { postId, author, type, name, introduce, content } = postData;
  const { volume, nicoVolume } = postData.info;
  const { sweet, mensol, neck, fresh } = postData.score;
  const query = `INSERT INTO ${MTL_REVIEW_TABLE}(post_id, author, type, name, volume, nico_volume, introduce, content, sweet, mensol, neck, fresh) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`;
  const values = [postId, author, type, name, volume, nicoVolume, introduce, content, sweet, mensol, neck, fresh];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const insertMtlLiquidImage = async (postId: string, imageUrl: string): Promise<OkPacket[]> => {
  const query = `INSERT INTO ${MTL_REVIEW_IMAGE_TABLE}(post_id, image_url) VALUES(?, ?)`;
  const values = [postId, imageUrl];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const getPosts = async () => {
  const query = `SELECT post_id, name, volume, nico_volume, introduce FROM ${MTL_REVIEW_TABLE} ORDER BY created_at DESC`;
  const queryResult = await sendQuery(query);
  return queryResult;
};

export const getPostImage = async (postId: string) => {
  const query = `SELECT * FROM ${MTL_REVIEW_IMAGE_TABLE} WHERE post_id=?`;
  const values = [postId];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};
