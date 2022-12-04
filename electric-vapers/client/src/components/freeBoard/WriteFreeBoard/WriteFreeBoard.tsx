import axios from "axios";
import { FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { urlConfig } from "../../../config";
import { freeBoardState, isLoadingState, loggedInUserState } from "../../../recoil/recoil";
import Header from "../Header";
import Buttons from "./Buttons";
import ContentEditor from "./ContentEditor";
import Title from "./Title";

const StyledWriteFreeBoard = styled.form`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const WriteFreeBoard = () => {
  const loggedInUser = useRecoilValue(loggedInUserState);
  const navigator = useNavigate();
  const setIsLoading = useSetRecoilState(isLoadingState);
  const [freeBoard, setFreeBoard] = useRecoilState(freeBoardState);

  useEffect(() => {
    setFreeBoard((prevState) => {
      return { ...prevState, author: loggedInUser.email, nickname: loggedInUser.nickname };
    });
  }, [loggedInUser.email, loggedInUser.nickname, setFreeBoard]);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const res = await axios.post(urlConfig.board.writeFreeBoard, freeBoard);

    if (res.status !== 200) {
      alert("오류가 발생했습니다.");
      return;
    }

    setFreeBoard((prevState) => {
      return { ...prevState, title: "", content: "" };
    });

    setIsLoading(false);

    navigator(-1);
  };

  return (
    <StyledWriteFreeBoard encType="multipart/form-data" onSubmit={submitHandler} acceptCharset="UTF-8">
      <Header isEdit />
      <Title />
      <ContentEditor />
      <Buttons />
    </StyledWriteFreeBoard>
  );
};

export default WriteFreeBoard;
