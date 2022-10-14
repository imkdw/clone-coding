import styled from "styled-components";
import { SquareFacebook } from "../../icon/FontAwesome";

import logo from "../../assets/logo.png";

const StyledLoginBox = styled.div`
  width: 350px;
  height: 570px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledLogo = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogoImage = styled.img`
  width: 175px;
  height: 51px;
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
  background-color: orange;
`;

const StyledLoginBoxBottom = styled.div`
  width: 100%;
  height: 85px;
  background-color: black;
`;

const StyledLoginForm = styled.form`
  width: 100%;
  height: 145px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const StyledInput = styled.input`
  width: 258px;
  height: 38px;
  border: 1px solid #dbdbdb;
  outline: none;
  background-color: #fafafa;
  font-size: 12px;
  border-radius: 4px;
  padding-left: 10px;
`;

const StyledButton = styled.button`
  width: 268px;
  height: 30px;
  border: none;
  background-color: #b2dffc;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 10px;
`;

const StyledContour = styled.div`
  width: 268px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* text-align: center; */
`;

const StyledContourText = styled.div`
  font-size: 13px;
  color: #8e8e8e;
  font-weight: bold;
`;

const StyledContourLine = styled.div`
  width: 100px;
  height: 1px;
  background-color: #dbdbdb;
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

const StyledFacebookLink = styled.a`
  color: #385185;
  font-size: 14px;
  font-weight: bold;
  margin-left: 10px;
`;

const StyledPasswordLink = styled.a`
  color: #00376b;
  font-size: 12px;
`;

const LoginBox = () => {
  return (
    <StyledLoginBox>
      <StyledLoginBoxTop>
        <StyledLogo className="logo">
          <StyledLogoImage src={logo} alt="" />
        </StyledLogo>
        <StyledLoginForm method="POST">
          <StyledInput type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
          <StyledInput type="password" placeholder="비밀번호" />
          <StyledButton type="submit">로그인</StyledButton>
        </StyledLoginForm>
        <StyledContour>
          <StyledContourLine />
          <StyledContourText>또는</StyledContourText>
          <StyledContourLine />
        </StyledContour>
        <StyledLinks1>
          <StyledLink>
            <SquareFacebook width="18px" height="18px" color="#385185" />
            <StyledFacebookLink>Facebook으로 로그인</StyledFacebookLink>
          </StyledLink>
          <StyledLink>
            <StyledPasswordLink>비밀번호를 잊으셨나요?</StyledPasswordLink>
          </StyledLink>
        </StyledLinks1>
      </StyledLoginBoxTop>
      <StyledLoginBoxMiddle></StyledLoginBoxMiddle>
      <StyledLoginBoxBottom></StyledLoginBoxBottom>
    </StyledLoginBox>
  );
};

export default LoginBox;
