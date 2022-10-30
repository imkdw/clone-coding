import Form from "../common/Form";
import Input from "../common/Input";
import { useState, FormEvent, ChangeEvent, FocusEvent } from "react";
import axios from "axios";
import styled from "styled-components";
import config from "./../../../config/config";
import { useRecoilState } from "recoil";
import { accessTokenState, loggedInUserState } from "../../../recoil/recoil";
import { useNavigate } from "react-router-dom";

interface ILoginButtonProps {
  backgroundColor: string;
}

const LoginButton = styled.button<ILoginButtonProps>`
  width: 268px;
  height: 30px;
  border: none;
  background-color: ${(props) => props.backgroundColor};
  color: white;
  border-radius: 4px;
  font-size: 14px;
  margin-top: 10px;
`;

const LoginForm = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });
  const [isAccountValid, setIsAccountValid] = useState(false);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState);
  const { email, password } = account;

  const navigate = useNavigate();

  const accountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.includes("@")) {
      alert("이메일 형식이 올바르지 않습니다.");
      return;
    }

    if (password.length < 6) {
      alert("비밀번호는 최소 6자리 이상 입력해주세요.");
      return;
    }

    const response = await axios.post(config.url.auth.loginUrl, { email, password });

    if (response.status === 200) {
      const { accessToken, userInfo } = response.data;
      const { email, name, nickname, profile, introduce } = userInfo;

      setAccessToken(accessToken);
      setLoggedInUser({
        ...loggedInUser,
        email,
        name,
        nickname,
        profile,
        introduce,
      });
      localStorage.setItem("accessToken", accessToken);
      navigate("/main");
    } else {
      alert("계정이 올바르지 않습니다.");
      return;
    }
  };

  const accountCheckHanlder = (event: FocusEvent<HTMLInputElement>) => {
    if (email && password) {
      setIsAccountValid(true);
    } else {
      setIsAccountValid(false);
    }
  };

  return (
    <Form height="145px" onSubmit={submitHandler}>
      <Input
        type="text"
        placeholder="이메일"
        height="38px"
        value={email}
        onChange={accountChangeHandler}
        name="email"
        onBlur={accountCheckHanlder}
      />
      <Input
        type="password"
        placeholder="비밀번호"
        height="38px"
        value={password}
        onChange={accountChangeHandler}
        name="password"
        onBlur={accountCheckHanlder}
      />

      {isAccountValid ? (
        <LoginButton type="submit" backgroundColor="#0095F6">
          로그인
        </LoginButton>
      ) : (
        <LoginButton type="submit" backgroundColor="#b2dffc">
          로그인
        </LoginButton>
      )}
    </Form>
  );
};

export default LoginForm;
