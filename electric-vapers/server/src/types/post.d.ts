export interface LiquidReviewData {
  postId: string;
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
  nickname?: string;
}
