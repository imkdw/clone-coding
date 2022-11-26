import styled from "styled-components";
import Star from "./Star";

const StyledScore = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ScoreItem = styled.div`
  width: 23%;
  height: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #dbdbdb;
`;

const StarWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Score = () => {
  return (
    <StyledScore>
      <ScoreItem>
        <Title>단맛</Title>
        <StarWrapper>
          <Star title="단맛" />
        </StarWrapper>
      </ScoreItem>
      <ScoreItem>
        <Title>멘솔</Title>
        <StarWrapper>
          <Star title="멘솔" />
        </StarWrapper>
      </ScoreItem>
      <ScoreItem>
        <Title>목긁음</Title>
        <StarWrapper>
          <Star title="목긁음" />
        </StarWrapper>
      </ScoreItem>
      <ScoreItem>
        <Title>상큼함</Title>
        <StarWrapper>
          <Star title="상큼함" />
        </StarWrapper>
      </ScoreItem>
    </StyledScore>
  );
};

export default Score;
