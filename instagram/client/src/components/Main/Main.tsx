import styled from "styled-components";
import AddPost from "../addPost/AddPost";
import Header from "./Header/Header";
import Posts from "./Post/Posts";
import Storys from "./Story/Storys";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  loggedInUserState,
  modalEnableState,
  profileMenuEnableState,
  searchResultState,
  showSearchResultState,
} from "../../recoil/recoil";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchResult from "./Header/SearchResult";

const StyledMain = styled.div`
  width: 100%;
  /* height: 100vh; */
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Main = () => {
  const [isModalEnable, setIsModalEnable] = useRecoilState(modalEnableState);
  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [profileMenuEnable, setProfileMenuEnable] = useRecoilState(profileMenuEnableState);
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);
  const [showSearchResult, setShowSearchResult] = useRecoilState(showSearchResultState);
  const navigator = useNavigate();

  useEffect(() => {
    setProfileMenuEnable(false);
    const checkLoggedIn = async () => {
      const localStorageaccessToken = localStorage.getItem("accessToken");

      if (localStorageaccessToken) {
        const config = {
          headers: {
            Authorization: localStorageaccessToken,
          },
        };

        const res = await axios.post("http://localhost:5000/auth/check-logged-in", {}, config);

        const { email, nickname, name, profile, introduce } = res.data;

        if (res.status === 200) {
          setAccessToken(localStorageaccessToken);
          setLoggedInUser({
            ...loggedInUser,
            email,
            nickname,
            name,
            profile,
            introduce,
          });
        } else {
          localStorage.removeItem("accessToken");
          setAccessToken(localStorageaccessToken);
          setLoggedInUser({ email: "", nickname: "", name: "", profile: "", introduce: "" });
          navigator("/login");
        }
      } else {
        navigator("/login");
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
        {showSearchResult && <SearchResult result={searchResult} />}
      </StyledMain>
      {isModalEnable && <AddPost />}
    </>
  );
};

export default Main;
