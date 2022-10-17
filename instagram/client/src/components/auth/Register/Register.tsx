import styled from "styled-components";
import { Link } from "react-router-dom";
import { SquareFacebook } from "../../../icon/FontAwesome";
import Box from "../common/Box";
import ContourLine from "../common/ContourLine";
import Form from "../common/Form";
import Input from "../common/Input";
import Logo from "../common/Logo";
import StoreButton from "../common/StoreButton";

const StyledRegister = styled.div`
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

const RegisterDesc = styled.p`
  width: 262px;
  height: 60px;
  color: #828282;
  font-size: 12px;
  text-align: center;
`;

const DescInfoLink = styled(Link)`
  font-weight: bold;

  &:visited {
    color: #828282;
  }
`;

const StyledRegisterButton = styled.button`
  width: 268px;
  height: 30px;
  background-color: #b2dffc;
  color: white;
  font-size: 14px;
  font-weight: bold;
  border-radius: 4px;
`;

const StyledLoginLinkWrapper = styled.p`
  font-size: 14px;
`;
const StyledLoginLink = styled(Link)`
  color: #0095f6;
`;

const Register = () => {
  return (
    <StyledRegister>
      <Box height="620px">
        <Logo height="60px" />
        <RegisterText>친구들의 사진과 동영상을 보려면 가입하세요.</RegisterText>
        <StyledFacebookLoginButton>
          <SquareFacebook width="18px" height="18px" color="white" />
          <p>Facebook으로 로그인</p>
        </StyledFacebookLoginButton>
        <ContourLine height="20px" />
        <Form height="360px">
          <Input type="text" placeholder="휴대폰 번호 또는 이메일 주소" height="36px" />
          <Input type="text" placeholder="성명" height="36px" />
          <Input type="text" placeholder="사용자 이름" height="36px" />
          <Input type="password" placeholder="비밀번호" height="36px" />
          <RegisterDesc>
            저희 서비스를 이용하는 사람이 회원님의 연락처 정보를 Instagram에 업로드했을 수도
            있습니다.
            <DescInfoLink to="#">더 알아보기</DescInfoLink>
          </RegisterDesc>
          <RegisterDesc>
            가입하면 <DescInfoLink to="">약관</DescInfoLink>,{" "}
            <DescInfoLink to="">개인정보처리방침</DescInfoLink> 및{" "}
            <DescInfoLink to="">쿠키 정책</DescInfoLink>에 동의하게 됩니다.
          </RegisterDesc>
          <StyledRegisterButton>가입</StyledRegisterButton>
        </Form>
      </Box>
      <Box height="70px">
        <StyledLoginLinkWrapper>
          계정이 있으신가요? <StyledLoginLink to="">로그인</StyledLoginLink>
        </StyledLoginLinkWrapper>
      </Box>
      <StoreButton />
    </StyledRegister>
  );
};

export default Register;
