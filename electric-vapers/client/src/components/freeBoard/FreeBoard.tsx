import styled from "styled-components";
import BoardPosts from "./BoardPosts";
import Header from "./Header";
import FreeBoardPagination from "./Pagination";

const StyledLiquidReview = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 767px) {
    width: 100%;
    gap: 10px;
  }
`;

const FreeBoard = () => {
  return (
    <StyledLiquidReview>
      <Header isEdit={false} />
      <BoardPosts />
      {/* <FreeBoardPagination />  */}
    </StyledLiquidReview>
  );
};

export default FreeBoard;
