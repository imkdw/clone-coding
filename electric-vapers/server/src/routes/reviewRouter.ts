import express from "express";
import {
  deleteLiquidReview,
  deleteLiquidReviewComment,
  getDtlLiquidReviews,
  getLiquidReview,
  getLiquidReviewComment,
  getMtlLiquidReviews,
  modifyLiquidReview,
  postLiquidReview,
  postLiquidReviewComment,
} from "../controllers/reviewController";

const reviewRouter = express.Router();

/** 입호흡, 폐호흡 액상 리뷰들 가져오기 */
reviewRouter.get("/mtl-liquid", getMtlLiquidReviews);
reviewRouter.get("/dtl-liquid", getDtlLiquidReviews);

/** 액상리뷰 상세정보 가져오기 */
reviewRouter.get("/liquid/:reviewId", getLiquidReview);

/** 액상 리뷰 작성하기 */
reviewRouter.post("/liquid", postLiquidReview);

/** 액상 리뷰 수정하기 */
reviewRouter.put("/liquid/:reviewId", modifyLiquidReview);

/** 액상 리뷰 삭제하기 */
reviewRouter.delete("/liquid/:reviewId", deleteLiquidReview);

/** 액상리뷰 댓글 가져오기 */
reviewRouter.get("/liquid/comment/:reviewId", getLiquidReviewComment);

/** 액상리뷰 댓글 작성하기 */
reviewRouter.post("/liquid/comment", postLiquidReviewComment);

/** 액상리뷰 댓글 삭제하기 */
reviewRouter.delete("/liquid/comment/:commentId", deleteLiquidReviewComment);

export default reviewRouter;
