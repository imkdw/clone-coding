import Container from "./components/common/Container";
import Main from "./components/main/Main";
import GlobalStyle from "./GlobalStyles";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { accessTokenState, isLoadingState, loggedInUserState, showSideMenuState } from "./recoil/recoil";
import SideMenu from "./components/header/SideMenu";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./components/register/Register";
import "./App.css";
import Login from "./components/login/Login";
import { useEffect } from "react";
import ReviewInfo from "./components/liquidReview/ReviewInfo";
import LiquidReview from "./components/liquidReview/LiquidReview";
import WriteLiquidReview from "./components/liquidReview/writeReview/WriteLiquidReview";
import axios from "axios";
import { urlConfig } from "./config";
import ModifyLiquidReview from "./components/liquidReview/modifyReview/ModifyLiquidReview";
import Loading from "./components/common/Loading";
import FreeBoard from "./components/freeBoard/FreeBoard";
import WriteFreeBoard from "./components/freeBoard/WriteFreeBoard/WriteFreeBoard";

const App = () => {
  const showSideMenu = useRecoilValue(showSideMenuState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const setLoggedInUser = useSetRecoilState(loggedInUserState);
  const navigator = useNavigate();
  const isLoading = useRecoilValue(isLoadingState);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const localStorageAccessToken = localStorage.getItem("accessToken");

      if (localStorageAccessToken) {
        const res = await axios.post(urlConfig.auth.checkLoggedIn, {
          accessToken: localStorageAccessToken,
        });

        if (res.status !== 200) {
          localStorage.removeItem("accessToken");
          setAccessToken("");
          return;
        }

        setAccessToken(localStorageAccessToken);

        const { email, nickname } = res.data;
        setLoggedInUser({
          email: email,
          nickname: nickname,
        });
      }
    };

    /** 새로고침시 메세지를 띄워서 방지 */
    const preventClose = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
      navigator("/");
    };

    /** accessToken 상태에 값이 없을경우 로그인 검증 시도 */
    if (accessToken.length === 0) {
      checkLoggedIn();
    }

    window.addEventListener("beforeunload", preventClose);
  }, [accessToken.length, setAccessToken, setLoggedInUser]);

  return (
    <>
      <Container>
        {showSideMenu && <SideMenu />}
        {isLoading && <Loading />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mtl-liquid" element={<LiquidReview division="mtl" />} />
          <Route path="/mtl-liquid/write" element={<WriteLiquidReview division="mtl" />} />
          <Route path="/dtl-liquid" element={<LiquidReview division="dtl" />} />
          <Route path="/dtl-liquid/write" element={<WriteLiquidReview division="dtl" />} />
          <Route path="/liquid-review/:reviewId" element={<ReviewInfo />} />
          <Route path="/liquid-review/modify/:postId" element={<ModifyLiquidReview />} />
          <Route path="/free-board" element={<FreeBoard />} />
          <Route path="/free-board/write" element={<WriteFreeBoard />} />
        </Routes>
      </Container>
      <GlobalStyle />
    </>
  );
};

export default App;
