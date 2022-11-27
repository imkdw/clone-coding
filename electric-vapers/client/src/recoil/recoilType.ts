/** 로그인유저 데이터 타입 */
export interface IUser {
  email: string;
  nickname: string;
}

/** 액상 리뷰 작성시 데이터 타입 */
export interface ILiquidReviewData {
  author: string;
  type: string;
  title: string;
  info: {
    [key: string]: number;
  };
  introduce: string;
  content: string;
  score: {
    [key: string]: number;
  };
  division: string;
}

/** 액상 상세정보 데이터 타입 */
export interface ILiquidInfo {
  review: {
    reviewId: string;
    author: string;
    nickname: string;
    type: string;
    title: string;
    info: {
      [key: string]: number;
    };
    introduce: string;
    content: string;
    score: {
      [key: string]: number;
    };
    division: string;
    createdAt: string;
  };
  images: string[];
}
