import Container from "./components/common/Container";
import Main from "./components/main/Main";
import GlobalStyle from "./GlobalStyles";
import { useRecoilState } from "recoil";
import { accessTokenState, showSideMenuState } from "./recoil/recoil";
import SideMenu from "./components/header/SideMenu";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register/Register";
import "./App.css";
import Login from "./components/login/Login";
import { useEffect } from "react";
import axios from "axios";
import LiquidReview from "./components/mtl/LiquidReview";
import WriteLiquidReview from "./components/mtl/WriteLiquidReview";

const App = () => {
  const [showSideMenu, setShowSideMenu] = useRecoilState(showSideMenuState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    const checkLoggedIn = async () => {
      /** accessToken이 상태가 비어있을 경우 */
      if (!accessToken) {
        const localStorageAccessToken = localStorage.getItem("accessToken");

        /** 로그인이 된 유저로 로컬스토리지에 토큰이 존재하는 경우 */
        if (localStorageAccessToken) {
          const res = await axios.post("http://localhost:5000/auth/check-logged-in", {
            accessToken: localStorageAccessToken,
          });

          /** 로그인한 유저가 아니거나 토큰이 만료된 경우 */
          if (res.status !== 200) {
            localStorage.removeItem("accessToken");
            setAccessToken("");
            return;
          }

          setAccessToken(localStorageAccessToken);
        }
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <>
      <Container>
        {showSideMenu && <SideMenu />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mtl-liquid" element={<LiquidReview />} />
          <Route path="/mtl-liquid/write" element={<WriteLiquidReview />} />
        </Routes>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
