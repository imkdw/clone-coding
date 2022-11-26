export const authUrlConfig = {};

export const postUrlConfig = {};

export const urlConfig = {
  auth: {
    login: "http://localhost:5000/auth/login",
    register: "http://localhost:5000/auth/register",
    checkLoggedIn: "http://localhost:5000/auth/check-logged-in",
  },
  post: {
    postLiquidReview: "http://localhost:5000/post/liquid-review",
    getMtlLiquidReviews: "http://localhost:5000/post/mtl-liquid",
    getLiquidReview: "http://localhost:5000/post/liquid-review/",
    getComment: "http://localhost:5000/post/liquid-review/comment/",
    postComment: "http://localhost:5000/post/liquid-review/comment",
  },
};
