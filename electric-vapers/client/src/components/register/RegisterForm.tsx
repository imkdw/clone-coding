import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isLoadingState } from "../../recoil/recoil";

const StyledRegisterForm = styled.form`
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

const RegisterForm = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
    rePassword: "",
    nickname: "",
  });
  const setIsLoading = useSetRecoilState(isLoadingState);
  const navigator = useNavigate();

  const { email, password, rePassword, nickname } = account;

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const res = await axios.post("http://localhost:5000/auth/register", {
      email,
      password,
      rePassword,
      nickname,
    });

    if (res.status !== 200) {
      alert("오류가 발생했습니다. 다시 시도해주세요");
      return;
    }

    alert("회원가입이 완료되었습니다. \n로그인페이지로 이동합니다.");
    setIsLoading(false);
    navigator("/login");
  };

  const changeAccountHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setAccount({
      ...account,
      [name]: value,
    });
  };

  return (
    <StyledRegisterForm onSubmit={submitHandler}>
      <FormControl>
        <Input
          placeholder="이메일"
          type="text"
          onChange={(event) => {
            changeAccountHandler(event);
          }}
          value={account.email}
          name="email"
        />
        {/* <Error>{isValid.emailMessage}</Error> */}
      </FormControl>
      <FormControl>
        <Input
          placeholder="닉네임"
          type="text"
          onChange={(event) => {
            changeAccountHandler(event);
          }}
          value={account.nickname}
          name="nickname"
        />
        {/* <Error>{isValid.nicknameMessage}</Error> */}
      </FormControl>
      <FormControl>
        <Input
          placeholder="비밀번호"
          type="password"
          onChange={(event) => {
            changeAccountHandler(event);
          }}
          value={account.password}
          name="password"
        />
        {/* <Error>{isValid.passwordMessage}</Error> */}
      </FormControl>
      <FormControl>
        <Input
          placeholder="비밀번호 재확인"
          type="password"
          onChange={(event) => {
            changeAccountHandler(event);
          }}
          value={account.rePassword}
          name="rePassword"
        />
        {/* <Error>{isValid.rePasswordMessage}</Error> */}
      </FormControl>

      <SubmitBtn>회원가입</SubmitBtn>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
