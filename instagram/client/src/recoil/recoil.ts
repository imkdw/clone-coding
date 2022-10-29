import { atom } from "recoil";
import { v4 } from "uuid";

export const accessTokenState = atom({
  key: v4(),
  default: "",
});

export const modalEnableState = atom({
  key: v4(),
  default: false,
});

export const isImageUploadedState = atom({
  key: v4(),
  default: false,
});

export const isWritingContentState = atom({
  key: v4(),
  default: false,
});

export const loggedInUserState = atom({
  key: v4(),
  default: {
    email: "",
    name: "",
    nickname: "",
    profile: "",
    introduce: "",
  },
});

export const blobImagesState = atom<Blob[] | never[]>({
  key: v4(),
  default: [],
});

export const uploadFilesState = atom<File[] | never[]>({
  key: v4(),
  default: [],
});

export const profileMenuEnableState = atom({
  key: v4(),
  default: false,
});
