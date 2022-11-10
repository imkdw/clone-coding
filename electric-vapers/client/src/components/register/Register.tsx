import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const StyledRegister = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 70px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.h1`
  height: 200px;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    height: 150px;
  }
`;

const Form = styled.form`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SubmitBtn = styled.button`
  width: 40%;
  height: 40px;
  background-color: #769bc1;
  border-radius: 22px;
  font-size: 20px;
  color: white;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const Input = styled.input`
  width: 50%;
  height: 30px;
  border-bottom: 2px solid #dbdbdb;
  font-size: 20px;
  padding: 0 0 10px 10px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Error = styled.div`
  width: 50%;
  height: 10px;
  font-size: 14px;
  color: red;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 80%;
  }
`;

const FormControl = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Register = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    rePassword: "",
    nickname: "",
  });

  const [emailValid, setEmailValid] = useState({
    valid: true,
    error: "",
  });

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password, rePassword, nickname } = account;
    const res = await axios.post("http://localhost:5000/auth/register", {
      email,
      password,
      rePassword,
      nickname,
    });

    console.log(res);
  };

  const emailCheckHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    if (!value.includes("@")) {
      setEmailValid({
        ...emailValid,
        valid: false,
        error: "이메일 형식이 올바르지 않습니다.",
      });
    } else {
      setEmailValid({
        ...emailValid,
        valid: true,
        error: "",
      });
    }
  };

  const changeAccountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  return (
    <StyledRegister>
      <Header>환영합니다!</Header>
      <Form onSubmit={submitHandler}>
        <FormControl>
          <Input
            placeholder="이메일"
            type="text"
            onChange={(event) => {
              emailCheckHandler(event);
              changeAccountHandler(event);
            }}
            value={account.email}
            name="email"
          />
          <Error>{emailValid.error}</Error>
        </FormControl>
        <FormControl>
          <Input
            placeholder="비밀번호"
            type="password"
            onChange={changeAccountHandler}
            value={account.password}
            name="password"
          />
          <Error></Error>
        </FormControl>
        <FormControl>
          <Input
            placeholder="비밀번호 재확인"
            type="password"
            onChange={changeAccountHandler}
            value={account.rePassword}
            name="rePassword"
          />
          <Error></Error>
        </FormControl>
        <FormControl>
          <Input
            placeholder="닉네임"
            type="text"
            onChange={changeAccountHandler}
            value={account.nickname}
            name="nickname"
          />
          <Error></Error>
        </FormControl>
        <SubmitBtn>회원가입</SubmitBtn>
      </Form>
    </StyledRegister>
  );
};

export default Register;
