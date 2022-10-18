import Form from "../common/Form";
import Input from "../common/Input";
import { useState, FormEvent, ChangeEvent, FocusEvent } from "react";
import axios from "axios";
import styled from "styled-components";
import config from "./../../../config/config";

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

  const { email, password } = account;
  const [isAccountValid, setIsAccountValid] = useState(false);

  const accountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await axios.post(config.url.loginUrl, { email, password });
    console.log(response);
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
        placeholder="전화번호, 사용자 이름 또는 이메일"
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
