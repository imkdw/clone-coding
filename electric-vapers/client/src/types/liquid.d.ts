export interface ILiquidData {
  postId: string;
  author: string;
  type: string;
  name: string;
  info: {
    [key: string]: number;
  };
  introduce: string;
  content: string;
  score: {
    [key: string]: number;
  };
}

export interface ILiquidReviewComment {
  commentId: string;
  nickname: string;
  createdAt: string;
  text: string;
}
