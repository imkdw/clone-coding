import { atom } from "recoil";
import { SearchUserResult } from "../types/user";

/** 로그인시 Access Token을 저장 */
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

/** 게시글 추가시 모달창 활성화 상태를 제어 */
export const modalEnableState = atom({
  key: "modalEnableState",
  default: false,
});

/** 게시글작성 - 이미지업로드 시 업로드 상태를 제어 */
export const isImageUploadedState = atom({
  key: "isImageUploadedState",
  default: false,
});

/** 게시글작성 - 본문작성 시 작성여부를 제어 */
export const isWritingContentState = atom({
  key: "isWritingContentState",
  default: false,
});

/** 로그인 후 유저의 정보를 저장 */
export const loggedInUserState = atom({
  key: "loggedInUserState",
  default: {
    email: "",
    name: "",
    nickname: "",
    profile: "",
    introduce: "",
  },
});

/** 이미지 프리뷰 구현시 이미지 -> 블롭 변환 저장 */
export const blobImagesState = atom<Blob[] | never[]>({
  key: "blobImagesState",
  default: [],
});

/** 업로드된 파일을 저장 */
export const uploadFilesState = atom<File[] | never[]>({
  key: "uploadFilesState",
  default: [],
});

/** 프로필 버튼 클릭 여부를 제어 */
export const profileMenuEnableState = atom({
  key: "profileMenuEnableState",
  default: false,
});

/** 유저 검색 결과를 저장 */
export const searchResultState = atom<SearchUserResult[] | never[]>({
  key: "searchResultState",
  default: [],
});

/** 유저 검색 결과창을 제어 */
export const showSearchResultState = atom({
  key: "isShowSearchResultState",
  default: false,
});

export const isSearchInputFocusState = atom({
  key: "isSearchInputFocusState",
  default: false,
});
