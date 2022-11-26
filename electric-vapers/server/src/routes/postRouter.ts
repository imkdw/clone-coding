import express from "express";
import {
  getDtlLiquidReviews,
  getLiquidReview,
  getLiquidReviewComment,
  getMtlLiquidReviews,
  postLiquidReview,
  postLiquidReviewComment,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.post("/liquid-review", postLiquidReview);
postRouter.get("/liquid-review/:postId", getLiquidReview);
postRouter.get("/mtl-liquid", getMtlLiquidReviews);
postRouter.get("/liquid-review/comment/:postId", getLiquidReviewComment);
postRouter.post("/liquid-review/comment", postLiquidReviewComment);

export default postRouter;
