import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { freeBoardDataState } from "../../../recoil/recoil";

const StyledContent = styled.div`
  width: 100%;
  height: auto;
`;

const Content = () => {
  const freeBoardData = useRecoilValue(freeBoardDataState);
  return <StyledContent dangerouslySetInnerHTML={{ __html: freeBoardData.content }} />;
};

export default Content;
