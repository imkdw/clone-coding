import { Request, Response, NextFunction } from "express";
import { getUUID } from "../module/secure";
import { insertPost } from "../models/postModel";

export const getMtlLiquidReviews = async (req: Request, res: Response, next: NextFunction) => {};

export const getMtlLiquidReview = async (req: Request, res: Response, next: NextFunction) => {};

export const postMtlLiquidReview = async (req: Request, res: Response, next: NextFunction) => {
  const postData = JSON.parse(req.body.postData);
  postData.postId = getUUID();
  const postQuery = await insertPost(postData);

  if (postQuery) {
    const files = req.files;
  }
  res.send("good");
};
