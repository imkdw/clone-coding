import styled from "styled-components";
import Banner from "./Banner";
import RecentPost from "./RecentPost";

const StyledMain = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <StyledMain>
      <Banner />
      <RecentPost />
    </StyledMain>
  );
};

export default Main;
