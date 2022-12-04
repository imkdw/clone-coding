import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { accessTokenState, loggedInUserState } from "../../recoil/recoil";

const StyledLoginForm = styled.form`
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

const LoginForm = () => {
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const setAccessToken = useSetRecoilState(accessTokenState);
  const setLoggedInUser = useSetRecoilState(loggedInUserState);

  const navigator = useNavigate();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { email, password } = account;

    try {
      const res = await axios.post("http://localhost:5000/auth/login", { email, password });

      /** 200, 로그인 성공시 */
      if (res.status === 200) {
        const accessToken = res.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        setAccessToken(accessToken);
        const { email, nickname } = res.data;
        setLoggedInUser((prevState) => {
          return { ...prevState, email: email, nickname: nickname };
        });
        navigator("/");
      }
    } catch (err: any) {
      /** 400, 이메일이 없거나 비밀번호가 틀린경우 */
      if (err.response.status === 400) {
        alert("이메일 또는 비밀번호가 잘못됬습니다.");
      }

      /** 500, 서버측 오류 */
      if (err.response.status === 500) {
        alert("오류가 발생했습니다. 잠시후 다시 시도해주세요");
        return;
      }
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
    <StyledLoginForm onSubmit={submitHandler}>
      <FormControl>
        <Input placeholder="이메일" type="text" onChange={changeAccountHandler} value={account.email} name="email" />
      </FormControl>
      <FormControl>
        <Input
          placeholder="비밀번호"
          type="password"
          onChange={changeAccountHandler}
          value={account.password}
          name="password"
        />
      </FormControl>
      <SubmitBtn>회원가입</SubmitBtn>
    </StyledLoginForm>
  );
};

export default LoginForm;
