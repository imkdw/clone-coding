import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { urlConfig } from "../../../config";
import { useRecoilState, useSetRecoilState } from "recoil";
import { freeBoardDataState, isLoadingState } from "../../../recoil/recoil";
import Title from "./Title";
import Buttons from "./Buttons";
import Content from "./Content";

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
  const setFreeBoardData = useSetRecoilState(freeBoardDataState);

  useEffect(() => {
    const getFreeBoard = async () => {
      setIsLoading(true);
      const res = await axios.get(`${urlConfig.board.readFreeBoard}/${boardId}`);
      setFreeBoardData(res.data);
      setIsLoading(false);
    };

    getFreeBoard();
  }, []);
  return (
    <StyledFreeBoardInfo>
      <Title />
      <Buttons />
      <Content />
    </StyledFreeBoardInfo>
  );
};

export default FreeBoardInfo;
