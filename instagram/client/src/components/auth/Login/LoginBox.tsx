import styled from "styled-components";
import { SquareFacebook } from "../../../icon/FontAwesome";
import { Link } from "react-router-dom";
import ContourLine from "../common/ContourLine";
import Logo from "../common/Logo";
import StoreButton from "../common/StoreButton";
import LoginForm from "./LoginForm";

const StyledLoginBox = styled.div`
  width: 350px;
  height: 570px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLoginBoxTop = styled.div`
  width: 100%;
  height: 390px;
  border: 1px solid #dbdbdb;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLoginBoxMiddle = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border: 1px solid #dbdbdb;
`;

const StyledLoginBoxBottom = styled.div`
  width: 100%;
  height: 85px;
  display: flex;
  align-items: center;
  gap: 30px;
  flex-direction: column;
`;

const StyledLinks1 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledLink = styled.div`
  width: 268px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledFacebookLink = styled(Link)`
  color: #385185;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

const StyledPasswordLink = styled(Link)`
  color: #00376b;
  font-size: 12px;
`;

const StyledMiddleText = styled.p`
  color: #252525;
  font-size: 15px;
`;

const StyledRegisterLink = styled(Link)`
  color: #0095f6;
  font-size: 14px;
  font-weight: bold;

  &:visited {
    color: #0095f6;
  }
`;

const LoginBox = () => {
  return (
    <StyledLoginBox>
      <StyledLoginBoxTop>
        <Logo width="100%" height="130px" />
        <LoginForm />
        <ContourLine height="45px" />
        <StyledLinks1>
          <StyledLink>
            <SquareFacebook width="18px" height="18px" color="#385185" />
            <StyledFacebookLink to="#">Facebook으로 로그인</StyledFacebookLink>
          </StyledLink>
          <StyledLink>
            <StyledPasswordLink to="#">비밀번호를 잊으셨나요?</StyledPasswordLink>
          </StyledLink>
        </StyledLinks1>
      </StyledLoginBoxTop>
      <StyledLoginBoxMiddle>
        <StyledMiddleText>
          계정이 없으신가요? <StyledRegisterLink to="/register">가입하기</StyledRegisterLink>
        </StyledMiddleText>
      </StyledLoginBoxMiddle>
      <StyledLoginBoxBottom>
        <StoreButton />
      </StyledLoginBoxBottom>
    </StyledLoginBox>
  );
};

export default LoginBox;
