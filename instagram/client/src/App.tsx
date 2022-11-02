import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import Header from "./components/main/Header/Header";
import Main from "./components/main/Main";
import Profile from "./components/user/profile/Profile";
import { accessTokenState, modalEnableState } from "./recoil/recoil";
import styled from "styled-components";
import AddPost from "./components/addPost/AddPost";
import SearchResult from "./components/main/Header/SearchResult";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const App = () => {
  const [isModalEnable, setIsModalEnable] = useRecoilState(modalEnableState);

  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {isModalEnable && <AddPost />}
      </Container>
    </>
  );
};

export default App;
