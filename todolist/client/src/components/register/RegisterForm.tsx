import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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
  type objectKeyType = {
    [key: string]: string;
  };

  const [account, setAccount] = useState<objectKeyType>({
    id: "",
    password: "",
    rePassword: "",
    nickname: "",
    email: "",
  });

  const [stateMessage, setStateMessage] = useState<objectKeyType>({
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
    const changeValidState = (key: string, msg: string, valid: boolean) => {
      setStateMessage({
        ...stateMessage,
        [key]: msg,
      });
      setIsValid({
        ...isValid,
        [name]: valid,
      });
    };

    const { name, value } = event.currentTarget;
    setAccount({
      ...account,
      [name]: value,
    });

    switch (name) {
      case "id":
        /**
         * 형식 : 영어 소문자 + 숫자
         * 길이 : 5 ~ 12자리
         */
        const lowerCaseRegex = /[a-z]/g;
        const lowerCaseCondition = value.match(lowerCaseRegex);
        const lenghtCondition = value.length >= 5 && value.length <= 12;

        if (lowerCaseCondition && lenghtCondition) {
          const msg = "올바른 형식입니다.";
          changeValidState(name, msg, true);
        } else if (value.length === 0) {
          changeValidState(name, "", false);
        } else {
          const msg = "올바르지 않은 형식입니다. 다시 입력해주세요.";
          changeValidState(name, msg, false);
        }

        break;

      case "password":
        /**
         * 형식 : 영어 대/소문자 + 숫자 + 특수문자
         * 길이 : 10 ~ 20 자리
         */
        const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        const koreanCondition = value.match(koreanRegex); // 한국어가 포함되면 true 반환

        const specialCharRegex =
          /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/g;
        const specialCharCondition = value.match(specialCharRegex); // 특수문자 포함되면 true 반환

        const passwordLenghtCondition =
          value.length >= 10 && value.length <= 20;

      /**
       ** [ 비밀번호 확인 ]
       * 1. 비밀번호 칸과 동일한지 확인
       */
      // case "rePassword":

      /**
       ** [ 닉네임 ]
       * 1. 특수문자가 포함되있는지 확인
       * 2. 최소 2자리 ~ 최대 6자리 확인
       *
       */
      // case "nickname":
      /**
       ** [ 이메일 ]
       * 1. 이메일형식에 올바른지 확인
       */
      // case "email":
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
            value={account[id]}
          />
          <StateBox message={stateMessage[id]} />
        </StyleInputWrapper>
      ))}
      <StyledButton type="submit">Register</StyledButton>
    </StyledForm>
  );
}

export default RegisterForm;
