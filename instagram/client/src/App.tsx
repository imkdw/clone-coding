import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import Main from "./components/Main/Main";
import { accessTokenState } from "./recoil/recoil";

const App = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  /**
   * 1. 로그인 되어 있는 경우 Main 컴포넌트로 이동
   * 2. 로그인이 되어있지 않은 경우 Login 컴포넌트로 이동
   */
  return (
    <Routes>
      {accessToken ? <Route path="/" element={<Main />} /> : <Route path="/" element={<Login />} />}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
