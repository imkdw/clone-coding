import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { liquidInfoState } from "../../../recoil/recoil";

const StyledReviewHeader = styled.div`
  width: 100%;
  height: 130px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

const LiquidName = styled.div`
  width: 90%;
  height: 80px;
  font-size: 40px;
  display: flex;

  @media screen and (max-width: 768px) {
    width: 80%;
    font-size: 24px;
    align-items: center;
  }
`;

const RecommendButton = styled.button`
  width: 10%;
  height: 40px;
  color: #0095f6;
  font-weight: bold;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  transition: all 0.3s;

  &:hover {
    font-weight: bold;
    background-color: #5ad2ff;
    color: black;
  }

  @media screen and (max-width: 768px) {
    width: 20%;
  }
`;

const HeaderData = styled.div`
  width: 100%;
  height: 50px;
  color: #828282;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Text = styled.div``;

const ReviewHeader = () => {
  const liquidInfo = useRecoilValue(liquidInfoState);
  const { title, createdAt, nickname, showCount, recommendCount } = liquidInfo.post;
  return (
    <StyledReviewHeader>
      <Title>
        <LiquidName>입호흡 - {title}</LiquidName>
        <RecommendButton>추천</RecommendButton>
      </Title>
      <HeaderData>
        <Text>
          {nickname} | {createdAt}
        </Text>
        <Text>
          조회수 : {showCount}회 | 추천 : {recommendCount}개
        </Text>
      </HeaderData>
    </StyledReviewHeader>
  );
};

export default ReviewHeader;
