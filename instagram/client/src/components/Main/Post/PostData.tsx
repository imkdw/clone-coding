import styled from "styled-components";

const StyledPostData = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: space-between;
`;

const AuthorAndContents = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  font-size: 14px;
  color: #262626;
`;

const Author = styled.div`
  font-weight: bold;
`;

const Contents = styled.div``;
const CreatedAt = styled.div`
  font-size: 10px;
  color: #828282;
`;

const PostData = () => {
  return (
    <StyledPostData>
      <AuthorAndContents>
        <Author>GunbungE</Author>
        <Contents>군붕이의 게시물 입니다.</Contents>
      </AuthorAndContents>
      <CreatedAt>1일 전</CreatedAt>
    </StyledPostData>
  );
};

export default PostData;
