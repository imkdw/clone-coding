import { atom } from "recoil";

/** 사이드메뉴 활성화 제어 */
export const showSideMenuState = atom({
  key: "showSideMenuState",
  default: false,
});

/** 엑세스토큰 저장용 */
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

/** 업로드된 이미지들 */
export const uploadImageState = atom<File[] | never[]>({
  key: "uploadImageState",
  default: [],
  dangerouslyAllowMutability: true,
});

/** 입호흡 리뷰 작성시 데이터 */
interface IMtlLiquidData {
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

/** 입호흡 리뷰 작성 데이터 */
export const mtlLiquidDataState = atom<IMtlLiquidData>({
  key: "mtlLiquidDataState",
  default: {
    author: "imkdw@kakao.com",
    type: "",
    name: "",
    info: {
      volume: 30,
      nicoVolume: 3,
    },
    introduce: "",
    content: "",
    score: {
      sweet: 0,
      mensol: 0,
      neck: 0,
      fresh: 0,
    },
  },
});
