import styled from "styled-components";

const StyledPostItem = styled.li`
  width: 100%;
  height: 23%;
  display: flex;
  border-bottom: 1px solid #dbdbdb;

  &:hover {
    cursor: pointer;
    background-color: #dbdbdb;
  }
`;

const Content = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Subject = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const Author = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #828282;
`;

const CreatedAt = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #828282;
`;

interface PostItemProps {
  subject: string;
  author: string;
  createdAt: string;
}

const PostItem = ({ subject, author, createdAt }: PostItemProps) => {
  return (
    <StyledPostItem>
      <Content>
        <Subject>{subject}</Subject>
        <Author>작성자 : {author}</Author>
      </Content>
      <CreatedAt>{createdAt}</CreatedAt>
    </StyledPostItem>
  );
};

export default PostItem;
