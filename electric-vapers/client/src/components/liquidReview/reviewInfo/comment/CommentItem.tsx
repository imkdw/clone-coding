import styled from "styled-components";

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

const CommentItem = () => {
  return (
    <StyledCommentItem>
      <NicknameAndDate>
        <Nickname>초보군붕이</Nickname>
        <CreatedAt>2022.11.19 15:34</CreatedAt>
      </NicknameAndDate>
      <CommentText>집가고싶다집가고싶다집가고싶다집가고싶다집가고싶다집가고싶다</CommentText>
    </StyledCommentItem>
  );
};

export default CommentItem;
