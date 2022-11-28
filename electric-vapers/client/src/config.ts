export const authUrlConfig = {};

export const postUrlConfig = {};

export const urlConfig = {
  auth: {
    login: "http://localhost:5000/auth/login",
    register: "http://localhost:5000/auth/register",
    checkLoggedIn: "http://localhost:5000/auth/check-logged-in",
  },
  review: {
    /**
     * getMtlLiquidReviews : 입호흡 액상 리뷰들
     * getDtlLiquidReviews : 폐호흡 액상 리뷰들
     * writeLiquidReview : 액상 리뷰 작성
     * getLiquidReview : 액상 리뷰 상세정보
     * getLiquidReviewComment : 액상 리뷰 댓글들
     * writeLiquidReviewComment : 액상 리뷰 댓글 작성
     * deleteLiquidReview: 액상 리뷰 삭제
     * deleteLiquidReviewComment: 액상 리뷰 댓글 삭제
     */
    getMtlLiquidReviews: "http://localhost:5000/review/mtl-liquid",
    getDtlLiquidReviews: "http://localhost:5000/review/dtl-liquid",
    writeLiquidReview: "http://localhost:5000/review/liquid",
    getLiquidReview: "http://localhost:5000/review/liquid/",
    getLiquidReviewComment: "http://localhost:5000/review/liquid/comment/",
    writeLiquidReviewComment: "http://localhost:5000/review/liquid/comment",
    modifyLiquidReview: "http://localhost:5000/review/liquid/",
    deleteLiquidReview: "http://localhost:5000/review/liquid/",
    deleteLiquidReviewComment: "http://localhost:5000/review/liquid/comment/",
  },
};
