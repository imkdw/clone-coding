import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const modalEnableState = atom({
  key: "modalEnableState",
  default: false,
});

export const isImageUploadedState = atom({
  key: "isImageUploadedState",
  default: false,
});

export const isWritingContentState = atom({
  key: "isWritingContentState",
  default: false,
});

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

export const blobImagesState = atom<Blob[] | never[]>({
  key: "blobImagesState",
  default: [],
});

export const uploadFilesState = atom<File[] | never[]>({
  key: "uploadFilesState",
  default: [],
});

export const profileMenuEnableState = atom({
  key: "profileMenuEnableState",
  default: false,
});
