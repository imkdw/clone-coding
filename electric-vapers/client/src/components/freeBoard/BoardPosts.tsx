import styled from "styled-components";

const StyledBoardPosts = styled.div`
  width: 100%;
  height: 700px;
  background-color: aliceblue;
`;

const PostTitle = styled.ul`
  width: 100%;
  height: 80px;
  border-top: 2px solid #0095f6;
  border-bottom: 2px solid #0095f6;
`;

const BoardPosts = () => {
  return (
    <StyledBoardPosts>
      <PostTitle />
    </StyledBoardPosts>
  );
};

export default BoardPosts;
