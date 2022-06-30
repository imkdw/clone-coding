import { Routes, Route } from "react-router-dom";
import Container from "./components/common/Container";
import LoginForm from "./components/login/LoginForm";
import Navigation from "./components/navigation/Navigation";
import RegisterForm from "./components/register/RegisterForm";
import GlobalStyle from "./GlobalStyles";
import { RecoilRoot, useRecoilState } from "recoil";
import { accessTokenState } from "./recoil/TodoState";
import MainPage from "./components/main/MainPage";

function App() {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Container>
        <Routes>
          {accessToken ? (
            <Route path="/" element={<MainPage />} />
          ) : (
            <Route path="/" element={<LoginForm />} />
          )}
          <Route path="/login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
