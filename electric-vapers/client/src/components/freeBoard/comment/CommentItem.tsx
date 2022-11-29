import styled from "styled-components";
import { ILiquidReviewComment } from "../../../types/liquid";
import { Button } from "antd";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { liquidInfoState, liquidReviewCommentState, loggedInUserState } from "../../../recoil/recoil";
import axios from "axios";
import { urlConfig } from "../../../config";
import { useNavigate } from "react-router-dom";

const StyledCommentItem = styled.li`
  width: 90%;
  height: 100px;
  border-radius: 20px;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const NicknameAndDate = styled.div`
  width: 90%;
  height: 45%;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  @media screen and (max-width: 767px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 0px;
  }
`;

const Nickname = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const CreatedAt = styled.div`
  color: #dbdbdb;
  font-size: 14px;
`;

const CommentText = styled.div`
  width: 90%;
  height: 45%;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const Buttons = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-self: end;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const CommentItem = ({ commentId, nickname, createdAt, text }: ILiquidReviewComment) => {
  const loggedInUser = useRecoilValue(loggedInUserState);
  const setLiquidComment = useSetRecoilState(liquidReviewCommentState);

  const deleteHandler = async () => {
    const confirm = window.confirm("정말로 삭제하실껀가요??");
    if (confirm) {
      const res = await axios.delete(urlConfig.review.deleteLiquidReviewComment + commentId);
      if (res.status !== 200) {
        alert("오류가 발생했습니다. 다시 시도해주세요");
        return;
      }

      setLiquidComment((prevState) => {
        const newComment = prevState.filter((comment) => comment.commentId !== commentId);
        return newComment;
      });
    }
  };

  return (
    <StyledCommentItem>
      <NicknameAndDate>
        <Nickname>{nickname}</Nickname>
        <CreatedAt>{createdAt}</CreatedAt>
        {nickname === loggedInUser.nickname && (
          <Buttons>
            <Button type="primary" onClick={deleteHandler} danger>
              삭제하기
            </Button>
          </Buttons>
        )}
      </NicknameAndDate>
      <CommentText>{text}</CommentText>
    </StyledCommentItem>
  );
};

export default CommentItem;
