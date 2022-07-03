import { atom } from "recoil";

type todoListStateType = {
  id: string;
  subject: string;
  state: string;
  content: string;
  createDate: string;
};

export const accessTokenState = atom<string | null>({
  key: "accessToken",
  default: null,
});

export const todoListState = atom<todoListStateType[]>({
  key: "todoList",
  default: [],
});
