import styled from "styled-components";
import Header from "./Header";
import LoginForm from "./LoginForm";

const StyledLogin = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Login = () => {
  return (
    <StyledLogin>
      <Header />
      <LoginForm />
    </StyledLogin>
  );
};

export default Login;
