import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { liquidInfoState, loggedInUserState } from "../../../recoil/recoil";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const StyledReviewHeader = styled.div`
  width: 100%;
  height: 180px;
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LiquidName = styled.div`
  width: 100%;
  font-size: 40px;
  display: flex;
  min-height: 80px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    font-size: 24px;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 24px;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderData = styled.div`
  width: 100%;
  height: 100px;
  color: #828282;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Text = styled.div`
  width: 100%;
  height: 50px;
`;

const Buttons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

const ReviewHeader = () => {
  const liquidInfo = useRecoilValue(liquidInfoState);
  const loggedInUser = useRecoilValue(loggedInUserState);
  const navigator = useNavigate();

  const modifyHandler = () => {
    navigator(`/liquid-review/modify/${liquidInfo.post.postId}`);
  };

  const { title, createdAt, nickname } = liquidInfo.post;
  return (
    <StyledReviewHeader>
      <LiquidName>입호흡 - {title}</LiquidName>
      <HeaderData>
        <Text>
          <p>작성자 : {nickname}</p>
          <p>작성일 : {createdAt}</p>
        </Text>
        {liquidInfo.post.author === loggedInUser.email && (
          <Buttons>
            <Button type="primary" onClick={modifyHandler}>
              수정하기
            </Button>
            <Button type="primary" danger>
              삭제하기
            </Button>
          </Buttons>
        )}
      </HeaderData>
    </StyledReviewHeader>
  );
};

export default ReviewHeader;
