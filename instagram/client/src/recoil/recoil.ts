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
