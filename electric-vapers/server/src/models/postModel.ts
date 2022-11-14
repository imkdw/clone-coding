import { OkPacket } from "mysql2";
import { mtlLiquidData } from "../types/post";
import { sendQuery } from "./promise";

export const insertPost = async (postData: mtlLiquidData): Promise<OkPacket[]> => {
  const { postId, author, type, name, introduce, content } = postData;
  const { volume, nicoVolume } = postData.info;
  const { sweet, mensol, neck, fresh } = postData.score;
  const query =
    "INSERT INTO mtl_liquid_review(post_id, author, type, name, volume, nico_volume, introduce, content, sweet, mensol, neck, fresh) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
  const values = [postId, author, type, name, volume, nicoVolume, introduce, content, sweet, mensol, neck, fresh];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};

export const insertMtlLiquidImage = async (postId: string, imageUrl: string): Promise<OkPacket[]> => {
  const query = "INSERT INTO mtl_liquid_review_images(post_id, image_url) VALUES(?, ?)";
  const values = [postId, imageUrl];
  const queryResult = await sendQuery(query, values);
  return queryResult;
};
