import styled from "styled-components";
import LoginBox from "./LoginBox";
import LoginImage from "./LoginImage";

const StyledLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledLoginWrapper = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <StyledLogin>
      <StyledLoginWrapper>
        <LoginImage />
        <LoginBox />
      </StyledLoginWrapper>
    </StyledLogin>
  );
};

export default Login;
