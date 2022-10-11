import styled from "styled-components";
import LoginBox from "./LoginBox";
import LoginForm from "./LoginBox";
import LoginImage from "./LoginImage";

const StyledLogin = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Login = () => {
  return (
    <StyledLogin>
      <LoginImage />
      <LoginBox />
    </StyledLogin>
  );
};

export default Login;
