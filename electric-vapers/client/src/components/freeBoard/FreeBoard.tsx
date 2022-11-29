import styled from "styled-components";
import BoardPosts from "./BoardPosts";
import Header from "./Header";

const StyledLiquidReview = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FreeBoard = () => {
  return (
    <StyledLiquidReview>
      <Header isEdit={false} />
      <BoardPosts />
    </StyledLiquidReview>
  );
};

export default FreeBoard;
