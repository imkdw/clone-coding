import styled from "styled-components";
import { isDoStatement } from "typescript";

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
  font-size: 11px;
  color: #828282;
`;

const PostData = ({
  author,
  content,
  createdAt,
}: {
  author: string;
  content: string;
  createdAt: string;
}) => {
  const beforeUploadDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const today = new Date();

    const diffDate = today.getDate() - date.getDate();
    const diffHours = today.getHours() - date.getHours();
    const diffMin = today.getMinutes() - date.getMinutes();

    if (diffDate === 0) {
      if (diffHours === 0) {
        if (diffMin === 0) {
          return 1 + "분 ";
        } else {
          return diffMin + "분 ";
        }
      } else {
        return diffHours + "시간 ";
      }
    } else {
      return diffDate + "일 ";
    }
  };

  return (
    <StyledPostData>
      <AuthorAndContents>
        <Author>{author}</Author>
        <Contents>{content}</Contents>
      </AuthorAndContents>
      <CreatedAt>{beforeUploadDate(createdAt)}전</CreatedAt>
    </StyledPostData>
  );
};

export default PostData;
