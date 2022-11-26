import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { urlConfig } from "../../../../config";
import { liquidInfoState, liquidReviewCommentTextState, loggedInUserState } from "../../../../recoil/recoil";
import { ILiquidReviewComment } from "../../../../types/liquid";
import CommentItem from "./CommentItem";
import WriteComment from "./WrtieComment";

const StyledComment = styled.div`
  width: 100%;
  height: auto;
  min-height: 200px;
  background-color: #fbfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const CommentCount = styled.div`
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 20px 0 0 20px;
`;

const CommentItems = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const Comment = () => {
  const [comments, setComments] = useState<ILiquidReviewComment[] | never[]>([]);
  const liquidReviewCommentText = useRecoilValue(liquidReviewCommentTextState);
  const { postId } = useParams();

  useEffect(() => {
    const getComments = async () => {
      const res = await axios.get(urlConfig.post.getComment + postId);
      if (res.status !== 200) {
        alert("댓글을 불러오지 못했습니다.");
        return;
      }

      setComments(res.data.comment);
    };

    if (liquidReviewCommentText.length === 0) {
      getComments();
    }
  }, [liquidReviewCommentText]);

  return (
    <StyledComment>
      {comments ? <CommentCount>댓글 {comments.length}개</CommentCount> : <CommentCount>댓글 0개</CommentCount>}
      {comments && (
        <CommentItems>
          {comments.map((comment, index) => (
            <CommentItem key={index} nickname={comment.nickname} createdAt={comment.createdAt} text={comment.text} />
          ))}
        </CommentItems>
      )}
      <WriteComment />
    </StyledComment>
  );
};

export default Comment;
