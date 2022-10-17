import styled from "styled-components";

interface IStyledContourProps {
  height: string;
}

const StyledContour = styled.div<IStyledContourProps>`
  width: 268px;
  height: ${(props) => props.height};
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

interface IContourLineProps {
  height: string;
}

const ContourLine = ({ height }: IContourLineProps) => {
  return (
    <StyledContour height={height}>
      <StyledContourLine />
      <StyledContourText>또는</StyledContourText>
      <StyledContourLine />
    </StyledContour>
  );
};

export default ContourLine;
