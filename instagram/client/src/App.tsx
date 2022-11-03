import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import Header from "./components/main/Header/Header";
import Main from "./components/main/Main";
import {
  accessTokenState,
  isSearchInputFocusState,
  modalEnableState,
  searchResultState,
  showSearchResultState,
} from "./recoil/recoil";
import styled from "styled-components";
import AddPost from "./components/addPost/AddPost";
import SearchResult from "./components/main/Header/SearchResult";
import MyProfile from "./components/user/myProfile/MyProfile";
import UserProfile from "./components/user/userProfile/UserProfile";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const App = () => {
  const [isModalEnable, setIsModalEnable] = useRecoilState(modalEnableState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [showSearchResult, setShowSearchResult] = useRecoilState(showSearchResultState);
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);

  const searchResultCloseHandler = () => {
    setShowSearchResult(false);
    setSearchResult([]);
  };

  return (
    <>
      {accessToken && <Header />}
      <Container onClick={searchResultCloseHandler}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
        {isModalEnable && <AddPost />}
        {showSearchResult && <SearchResult result={searchResult} />}
      </Container>
    </>
  );
};

export default App;
