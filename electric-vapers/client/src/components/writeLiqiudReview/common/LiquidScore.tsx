import styled from "styled-components";
import Star from "./Star";

const StyledLiquidScore = styled.div`
  width: 100%;
  height: 500px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 200px;
    flex-direction: column;
  }
`;

const ScoreItem = styled.div`
  width: 24%;
  height: 100%;
  display: flex;
  border-radius: 20px;
  border: 1px solid #dbdbdb;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 20%;
  }
`;

const ScoreTItle = styled.div`
  width: 30%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dbdbdb;
`;

const LiquidScore = () => {
  return (
    <StyledLiquidScore>
      <ScoreItem>
        <ScoreTItle>단맛</ScoreTItle>
        <Star title="sweet" />
      </ScoreItem>
      <ScoreItem>
        <ScoreTItle>멘솔</ScoreTItle>
        <Star title="mensol" />
      </ScoreItem>
      <ScoreItem>
        <ScoreTItle>목긁음</ScoreTItle>
        <Star title="neck" />
      </ScoreItem>
      <ScoreItem>
        <ScoreTItle>상큼함</ScoreTItle>
        <Star title="fresh" />
      </ScoreItem>
    </StyledLiquidScore>
  );
};

export default LiquidScore;
