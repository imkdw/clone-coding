import styled from "styled-components";
import AddPost from "../AddPost/AddPost";
import Header from "./Header/Header";
import Posts from "./Post/Posts";
import Storys from "./Story/Storys";
import { useRecoilState } from "recoil";
import { accessTokenState, loggedInUserState, modalEnableState } from "../../recoil/recoil";
import { useEffect } from "react";
import axios from "axios";

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
  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const localStorageaccessToken = localStorage.getItem("accessToken");

      if (localStorageaccessToken) {
        const res = await axios.post(
          "http://localhost:5000/auth/check-logged-in",
          {},
          {
            headers: {
              Authorization: localStorageaccessToken,
            },
          }
        );

        const { email, nickname, name } = res.data;
        if (res.status === 200) {
          setAccessToken(localStorageaccessToken);
          setLoggedInUser({
            ...loggedInUser,
            email,
            nickname,
            name,
          });
        }
      }
    };

    checkLoggedIn();
  }, []);

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
