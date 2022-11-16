import express from "express";
import {
  getDtlLiquidReviews,
  getMtlLiquidReview,
  getMtlLiquidReviews,
  postMtlLiquidReview,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.get("/mtl-liquid/:reviewId", getMtlLiquidReview);
postRouter.get("/mtl-liquid", getMtlLiquidReviews);
postRouter.post("/mtl-liquid", postMtlLiquidReview);
postRouter.get("/dtl-liquid/:reviewId", getMtlLiquidReview);
postRouter.get("/dtl-liquid", getDtlLiquidReviews);
postRouter.post("/dtl-liquid", postMtlLiquidReview);

export default postRouter;
