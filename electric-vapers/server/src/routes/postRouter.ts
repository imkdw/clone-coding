import express from "express";
import {
  getDtlLiquidReviews,
  getLiquidReview,
  getMtlLiquidReviews,
  postLiquidReview,
} from "../controllers/postController";

const postRouter = express.Router();

postRouter.post("/liquid-review", postLiquidReview);
postRouter.get("/liquid-review/:postId", getLiquidReview);
postRouter.get("/mtl-liquid", getMtlLiquidReviews);

export default postRouter;
