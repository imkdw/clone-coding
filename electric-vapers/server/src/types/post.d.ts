export interface mtlLiquidData {
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
