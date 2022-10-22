import styled from "styled-components";
import AddPost from "../AddPost/AddPost";
import Header from "./Header/Header";
import Posts from "./Post/Posts";
import Storys from "./Story/Storys";
import { useRecoilState } from "recoil";
import { modalEnableState } from "../../recoil/recoil";

const StyledMain = styled.div`
  width: 100%;
  /* height: 100vh; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Main = () => {
  const [isModalEnable, setIsModalEnable] = useRecoilState(modalEnableState);

  return (
    <>
      <StyledMain>
        <Header />
        <Storys />
        <Posts />
      </StyledMain>
      {isModalEnable && <AddPost />}
    </>
  );
};

export default Main;
