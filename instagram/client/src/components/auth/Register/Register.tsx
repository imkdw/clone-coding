import styled from "styled-components";
import { Link } from "react-router-dom";
import { SquareFacebook } from "../../../icon/FontAwesome";
import Box from "../common/Box";
import ContourLine from "../common/ContourLine";
import Logo from "../common/Logo";
import StoreButton from "../common/StoreButton";
import RegisterForm from "./RegisterForm";

const StyledRegister = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;

const RegisterText = styled.p`
  width: 270px;
  height: 40px;
  font-size: 17px;
  color: #828282;
  font-weight: bold;
  text-align: center;
`;

const StyledFacebookLoginButton = styled.button`
  width: 268px;
  height: 32px;
  background-color: #0096f6;
  color: white;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StyledLoginLinkWrapper = styled.p`
  font-size: 14px;
`;
const StyledLoginLink = styled(Link)`
  color: #0095f6;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Register = () => {
  return (
    <StyledRegister>
      <Box height="620px">
        <LogoBox>
          <Logo width="175" height="51" />
        </LogoBox>
        <RegisterText>친구들의 사진과 동영상을 보려면 가입하세요.</RegisterText>
        <StyledFacebookLoginButton>
          <SquareFacebook width="18px" height="18px" color="white" />
          <p>Facebook으로 로그인</p>
        </StyledFacebookLoginButton>
        <ContourLine height="20px" />
        <RegisterForm />
      </Box>
      <Box height="70px">
        <StyledLoginLinkWrapper>
          계정이 있으신가요? <StyledLoginLink to="/login">로그인</StyledLoginLink>
        </StyledLoginLinkWrapper>
      </Box>
      <StoreButton />
    </StyledRegister>
  );
};

export default Register;
