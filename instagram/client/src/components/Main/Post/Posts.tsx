import styled from "styled-components";
import PostItem from "./PostItem";

const StyledPosts = styled.ul`
  position: relative;
  width: 470px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Posts = () => {
  return (
    <>
      <StyledPosts>
        <PostItem />
        <PostItem />
        <PostItem />
      </StyledPosts>
    </>
  );
};

export default Posts;
