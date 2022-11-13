import express from "express";
import { getMtlLiquidReview, getMtlLiquidReviews, postMtlLiquidReview } from "../controllers/postController";

const postRouter = express.Router();

postRouter.get("/mtl-liquid/:reviewId", getMtlLiquidReview);
postRouter.get("/mtl-liquid", getMtlLiquidReviews);
postRouter.post("/mtl-liquid", postMtlLiquidReview);

export default postRouter;
