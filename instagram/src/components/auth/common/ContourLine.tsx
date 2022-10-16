import styled from "styled-components";

const StyledContour = styled.div`
  width: 268px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StyledContourText = styled.div`
  font-size: 13px;
  color: #8e8e8e;
  font-weight: bold;
`;

const StyledContourLine = styled.div`
  width: 100px;
  height: 1px;
  background-color: #dbdbdb;
`;

const ContourLine = () => {
  return (
    <StyledContour>
      <StyledContourLine />
      <StyledContourText>또는</StyledContourText>
      <StyledContourLine />
    </StyledContour>
  );
};

export default ContourLine;
