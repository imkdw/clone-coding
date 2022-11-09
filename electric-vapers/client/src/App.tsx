import Container from "./components/common/Container";
import Main from "./components/main/Main";
import GlobalStyle from "./GlobalStyles";
import { useRecoilState } from "recoil";
import { showSideMenuState } from "./recoil/recoil";
import SideMenu from "./components/header/SideMenu";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import "./App.css";
import Login from "./components/login/Login";

const App = () => {
  const [showSideMenu, setShowSideMenu] = useRecoilState(showSideMenuState);
  return (
    <>
      <Container>
        {showSideMenu && <SideMenu />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
