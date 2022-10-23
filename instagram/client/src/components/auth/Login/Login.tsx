import { useRecoilState } from "recoil";
import styled from "styled-components";
import { accessTokenState } from "../../../recoil/recoil";
import LoginBox from "./LoginBox";
import LoginImage from "./LoginImage";
import { useEffect } from "react";
import axios from "axios";
import config from "../../../config/config";
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

  useEffect(() => {
    const checkLogined = async () => {
      const accessToken = localStorage.getItem("accessToken");

      if (accessToken) {
        const response = await axios.post(config.url.checkLoginedUrl, { accessToken });

        /** 로그인 값이 유효할 경우 */
        if (response.status === 200) {
          navigator("/main");
        } else {
          localStorage.removeItem("accessToken");
          setAccessToken("");
          navigator("/login");
        }
      }
    };

    checkLogined();
  }, []);

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
