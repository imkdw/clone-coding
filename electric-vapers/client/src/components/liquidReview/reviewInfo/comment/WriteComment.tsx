import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { liquidInfoState, liquidReviewCommentTextState, loggedInUserState } from "../../../../recoil/recoil";
import { FormEvent, ChangeEvent } from "react";
import axios from "axios";
import { urlConfig } from "../../../../config";

const StyeldWriteComment = styled.form`
  width: 90%;
  height: 120px;
  border: 1px solid #828282;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  gap: 10px;
  margin-top: 40px;
`;

const NicknameWrapper = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
`;

const Nickname = styled.div`
  margin-left: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  width: 85%;
  height: 100%;
  font-size: 20px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 65%;
  }
`;

const SubmitButton = styled.button`
  width: 8%;
  height: 50%;
  color: #0095f6;
  border-radius: 20px;
  border: 1px solid #dbdbdb;

  @media screen and (max-width: 768px) {
    width: 20%;
    height: 70%;
  }
`;

const WriteComment = () => {
  const loggedInUser = useRecoilValue(loggedInUserState);
  const liquidInfo = useRecoilValue(liquidInfoState);
  const [liquidReviewCommentText, setLiquidReviewCommentText] = useRecoilState(liquidReviewCommentTextState);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (liquidReviewCommentText.length === 0) {
      alert("댓글을 입력해주세요");
      return;
    }

    if (liquidReviewCommentText.length > 50) {
      alert("최대 50자 까지 작성이 가능합니다.");
      return;
    }

    const body = {
      reviewId: liquidInfo.review.reviewId,
      comment: {
        author: loggedInUser.email,
        nickname: loggedInUser.nickname,
        text: liquidReviewCommentText,
      },
    };
    const res = await axios.post(urlConfig.review.writeLiquidReviewComment, body);

    if (res.status !== 200) {
      alert("오류가 발생했습니다. 다시 시도해주세요");
      return;
    }

    setLiquidReviewCommentText("");
  };

  const commentChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setLiquidReviewCommentText(value);
  };

  return (
    <StyeldWriteComment onSubmit={submitHandler}>
      <NicknameWrapper>
        <Nickname>닉네임 : {loggedInUser.nickname}</Nickname>
      </NicknameWrapper>
      <InputWrapper>
        <Input
          type="text"
          placeholder="댓글을 입력하세요.."
          value={liquidReviewCommentText}
          onChange={commentChangeHandler}
        />
        <SubmitButton>댓글입력</SubmitButton>
      </InputWrapper>
    </StyeldWriteComment>
  );
};

export default WriteComment;
