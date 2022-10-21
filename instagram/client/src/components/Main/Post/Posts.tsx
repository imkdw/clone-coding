import styled from "styled-components";
import PostItem from "./PostItem";

const StyledPosts = styled.ul`
  width: 470px;
  margin-top: 20px;
`;

const Posts = () => {
  return (
    <StyledPosts>
      <PostItem />
    </StyledPosts>
  );
};

export default Posts;
