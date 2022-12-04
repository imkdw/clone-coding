import styled from "styled-components";
import Header from "./Header";
import RegisterForm from "./RegisterForm";

const StyledRegister = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Register = () => {
  return (
    <StyledRegister>
      <Header />
      <RegisterForm />
    </StyledRegister>
  );
};

export default Register;
