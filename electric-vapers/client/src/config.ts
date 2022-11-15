export const authUrlConfig = {};

export const postUrlConfig = {};

export const urlConfig = {
  auth: {
    login: "http://localhost:5000/auth/login",
    register: "http://localhost:5000/auth/register",
    checkLoggedIn: "http://localhost/auth/check-logged-in",
  },
  post: {
    postMtlLiquidReview: "http://localhost:5000/post/mtl-liquid",
    getMtlLiquidReviews: "http://localhost:5000/post/mtl-liquid",
    getMtlLiquidReview: "http://localhost:5000/post/mtl-liquid/:id",
  },
};
