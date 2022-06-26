import { Routes, Route } from "react-router-dom";
import Container from "./components/common/Container";
import LoginForm from "./components/login/LoginForm";
import Navigation from "./components/navigation/Navigation";
import RegisterForm from "./components/register/RegisterForm";
import GlobalStyle from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
