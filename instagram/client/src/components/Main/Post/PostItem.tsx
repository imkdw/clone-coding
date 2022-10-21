import styled from "styled-components";
import PostAuthor from "./PostAuthor";
import PostImage from "./PostImage";

const StyledPostItem = styled.li`
  width: 100%;
  height: 830px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #dbdbdb;
`;

const PostItem = () => {
  return (
    <StyledPostItem>
      <PostAuthor />
      <PostImage />
    </StyledPostItem>
  );
};

export default PostItem;
