import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { urlConfig } from "../../../config";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { freeBoardDataState, isLoadingState, loggedInUserState } from "../../../recoil/recoil";
import Title from "./Title";
import Buttons from "./Buttons";
import Content from "./Content";
import Comment from "./comment/Comment";

const StyledFreeBoardInfo = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FreeBoardInfo = () => {
  const { boardId } = useParams();
  const setIsLoading = useSetRecoilState(isLoadingState);
  const [freeBoardData, setFreeBoardData] = useRecoilState(freeBoardDataState);
  const loggedInUser = useRecoilValue(loggedInUserState);

  useEffect(() => {
    const getFreeBoard = async () => {
      const res = await axios.get(`${urlConfig.board.readFreeBoard}/${boardId}`);
      setFreeBoardData(res.data);
    };

    getFreeBoard();
  }, []);
  return (
    <StyledFreeBoardInfo>
      <Title />
      {freeBoardData.author === loggedInUser.email && <Buttons />}
      <Content />
      <Comment />
    </StyledFreeBoardInfo>
  );
};

export default FreeBoardInfo;
