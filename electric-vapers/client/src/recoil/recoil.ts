import { atom } from "recoil";
import { ILiquidReviewComment } from "../types/liquid";
import { ILiquidInfo, ILiquidReviewData, IUser } from "./recoilType";

/** 사이드메뉴 활성화 제어 */
export const showSideMenuState = atom<boolean>({
  key: "showSideMenuState",
  default: false,
});

/** 엑세스토큰 저장용 */
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

/** 로그인유저 저장용 */
export const loggedInUserState = atom<IUser>({
  key: "loggedInUserState",
  default: {
    email: "",
    nickname: "",
  },
});

/** 업로드된 이미지들 */
export const uploadImageState = atom<File[] | never[]>({
  key: "uploadImageState",
  default: [],
  dangerouslyAllowMutability: true,
});

/** 액상 리뷰 작성 데이터 */
export const liquidDataState = atom<ILiquidReviewData>({
  key: "mtlLiquidDataState",
  default: {
    author: "",
    type: "",
    title: "",
    info: {
      volume: 0,
      nicoVolume: 0,
    },
    introduce: "",
    content: "",
    score: {
      sweet: 0,
      mensol: 0,
      neck: 0,
      fresh: 0,
    },
    division: "",
  },
});

/** 액상 상세정보 데이터 */
export const liquidInfoState = atom<ILiquidInfo>({
  key: "liquidInfoState",
  default: {
    review: {
      reviewId: "",
      author: "",
      nickname: "",
      type: "",
      title: "",
      info: {
        volume: 0,
        nicoVolume: 0,
      },
      introduce: "",
      content: "",
      score: {
        sweet: 0,
        mensol: 0,
        neck: 0,
        fresh: 0,
      },
      division: "",
      createdAt: "",
    },
    images: [""],
  },
});

/** 액상 리뷰 댓글 텍스트 */
export const liquidReviewCommentTextState = atom({
  key: "liquidReviewCommentTextState",
  default: "",
});

/** 액상 리뷰 댓글 */
export const liquidReviewCommentState = atom<ILiquidReviewComment[]>({
  key: "liquidReviewCommentState",
  default: [
    {
      commentId: "",
      nickname: "",
      createdAt: "",
      text: "",
    },
  ],
});

/** 로딩 화면 표현 */
export const isLoadingState = atom({
  key: "isLoadingState",
  default: false,
});

/** 자유게시판 글 작성 데이터 */
export const freeBoardState = atom({
  key: "freeBoardState",
  default: {
    author: "",
    nickname: "",
    title: "",
    content: "",
  },
});

/** 자유게시판 상세보기 데이터 */
export const freeBoardDataState = atom({
  key: "freeBoardData",
  default: {
    author: "",
    boardId: "",
    content: "",
    createdAt: "",
    nickname: "",
    title: "",
  },
});
