import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";

const StyledLogin = styled.div`
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

const Login = () => {
  const [emailValid, setEmailValid] = useState({
    valid: true,
    error: "",
  });

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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

  return (
    <StyledLogin>
      <Header>환영합니다!</Header>
      <Form onSubmit={submitHandler}>
        <FormControl>
          <Input placeholder="이메일" type="text" onChange={emailCheckHandler} />
          <Error>{emailValid.error}</Error>
        </FormControl>
        <FormControl>
          <Input placeholder="비밀번호" type="password" />
          <Error></Error>
        </FormControl>
        <SubmitBtn>로그인</SubmitBtn>
      </Form>
    </StyledLogin>
  );
};

export default Login;
