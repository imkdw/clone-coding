import { useRecoilState } from "recoil";
import styled from "styled-components";
import { accessTokenState } from "../../../recoil/recoil";
import LoginBox from "./LoginBox";
import LoginImage from "./LoginImage";
import { useNavigate } from "react-router-dom";

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
  const navigator = useNavigate();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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
