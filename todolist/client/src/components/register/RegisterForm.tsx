import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import AuthInput from "../common/AuthInput";
import Label from "../common/Label";
import StateBox from "./StateBox";

const StyledForm = styled.form`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 200px;
`;

const StyleInputWrapper = styled.div`
  width: 500px;
  height: 110px;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.button`
  background-color: D9D9D9;
  width: 500px;
  height: 40px;
  border: none;
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

function RegisterForm() {
  const [account, setAccount] = useState({
    id: "",
    password: "",
    rePassword: "",
    nickname: "",
    email: "",
  });

  const [stateMessage, setStateMessage] = useState({
    id: "",
    password: "",
    rePassword: "",
    nickname: "",
    email: "",
  });

  const [isValid, setIsValid] = useState({
    id: false,
    password: false,
    rePassword: false,
    nickname: false,
    email: false,
  });

  const textData = [
    {
      type: "text",
      label: "아이디",
      placeholder: "ID (영문 소문자, 5~12자리)",
      id: "id",
    },
    {
      type: "password",
      label: "비밀번호",
      placeholder: "영문 대/소문자, 특수문자(!,@,# 등) 포함필수",
      id: "password",
    },
    {
      type: "password",
      label: "비밀번호 확인",
      placeholder: "패스워드 한번 더 입력",
      id: "rePassword",
    },
    {
      type: "text",
      label: "닉네임",
      placeholder: "한글 또는 영문, 최대 6자리",
      id: "nickname",
    },
    {
      type: "text",
      label: "이메일",
      placeholder: "올바른 이메일 형식에 맞게 입력(ex. asd@naver.com)",
      id: "email",
    },
  ];

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    console.log(name, value);

    setAccount({
      ...account,
      [name]: value,
    });

    switch (name) {
      /**
       * [ 아이디 ]
       * 1. 영어 및 소문자로만 구성되있는지 체크
       * 2. 입력한 길이가 12자리 이하인지 체크
       *
       * [ 비밀번호 ]
       * 1. 영어 대문자 및 소문자인지 체크
       * 2. 특수문자가 포함되어있는지 체크
       * 3. 최소 10자리인지 체크
       *
       * [ 비밀번호 확인 ]
       * 1. 비밀번호 칸과 동일한지 확인
       *
       * [ 닉네임 ]
       * 1. 특수문자가 포함되있는지 확인
       * 2. 최소 2자리 ~ 최대 6자리 확인
       *
       * [ 이메일 ]
       * 1. 이메일형식에 올바른지 확인
       */
      case "id":
        const regex = /[a-z]/g;
        const lowerCaseCondition = account.id.match(regex);
        const lenghtCondition = account.id.length < 13;

        if (!lowerCaseCondition) {
          setStateMessage({
            ...stateMessage,
            [name]: "아이디는 소문자만 입력이 가능합니다.",
          });
          setIsValid({
            ...isValid,
            [name]: false,
          });
        }

        if (!lenghtCondition) {
          setStateMessage({
            ...stateMessage,
            [name]: "아이디는 최대 12자리 입니다.",
          });
          setIsValid({
            ...isValid,
            [name]: false,
          });
        }

        if (lowerCaseCondition && lenghtCondition) {
          setStateMessage({
            ...stateMessage,
            [name]: "올바른 형식입니다.",
          });
          setIsValid({
            ...isValid,
            [name]: true,
          });
        }

        break;
      // case "password":
      // case "rePassword":
      // case "nickname":
      // case "email":
      default:
        break;
    }
  };

  return (
    <StyledForm onSubmit={onSubmit}>
      {textData.map(({ type, label, placeholder, id }) => (
        <StyleInputWrapper key={id}>
          <Label label={label} htmlFor={id} />
          <AuthInput
            type={type}
            placeholder={placeholder}
            id={id}
            onChange={onChange}
            name={id}
          />
          <StateBox message={stateMessage["id"]} />
        </StyleInputWrapper>
      ))}
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
}

export default RegisterForm;
