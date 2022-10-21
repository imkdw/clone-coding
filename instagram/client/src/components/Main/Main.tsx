import styled from "styled-components";
import Header from "./Header/Header";
import Posts from "./Post/Posts";
import Storys from "./Story/Storys";

const StyledMain = styled.div`
  width: 100%;
  /* height: 100vh; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Storys />
      <Posts />
    </StyledMain>
  );
};

export default Main;
