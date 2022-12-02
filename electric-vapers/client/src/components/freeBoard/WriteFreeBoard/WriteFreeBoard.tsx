import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { urlConfig } from "../../../config";
import { isLoadingState, liquidDataState, loggedInUserState, uploadImageState } from "../../../recoil/recoil";
import Header from "../Header";
import Buttons from "./Buttons";
import Editor from "./Editor";
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

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <StyledWriteFreeBoard encType="multipart/form-data" onSubmit={submitHandler} acceptCharset="UTF-8">
      <Header isEdit />
      <Title />
      <Editor />
      <Buttons />
    </StyledWriteFreeBoard>
  );
};

export default WriteFreeBoard;
