import { atom } from "recoil";

export const showSideMenuState = atom({
  key: "showSideMenuState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});
