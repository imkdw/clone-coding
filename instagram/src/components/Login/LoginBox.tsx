import Input from "../UI/Input";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import LoginLogo from "./LoginLogo";
import ContourLine from "./contourLine";
import LoginLinks1 from "./LoginLinks1";
import LoginLinks2 from "./LoginLinks2";

const StyledLoginBox = styled.div`
  width: 350px;
  height: 700px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
`;

const LoginBox = () => {
  return (
    <StyledLoginBox>
      <LoginLogo />
      <LoginForm />
      <ContourLine />
      <LoginLinks1 />
      <LoginLinks2 />
    </StyledLoginBox>
  );
};

export default LoginBox;
