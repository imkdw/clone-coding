import styled from "styled-components";
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
  return (
    <StyledComment>
      <CommentCount>댓글 5개</CommentCount>
      <CommentItems>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </CommentItems>
      <WriteComment />
    </StyledComment>
  );
};

export default Comment;
