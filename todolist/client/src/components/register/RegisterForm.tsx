import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import AuthInput from "../common/AuthInput";
import Label from "../common/Label";
import StateBox from "./StateBox";
import { accessTokenState } from "../../recoil/TodoState";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/AuthAPI";
import { accountType } from "../../type/auth.interface";

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
  const navigate = useNavigate();
  type objectKeyType = {
    [key: string]: string;
  };

  const [account, setAccount] = useState<objectKeyType & accountType>({
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
    all: "",
  });

  const [isValid, setIsValid] = useState({
    id: false,
    password: false,
    rePassword: false,
    nickname: false,
    email: false,
  });

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

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

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id, password, rePassword, nickname, email } = isValid;

    // 계정 양식이 모두 올바을 경우 API 호출
    if (!(id && password && rePassword && nickname && email)) {
      alert("올바르지 않은 항목이 있습니다. 다시 확인해주세요.");
      return;
    }

    const response = await register(account);
    if (response.data.errCode) {
      const errCode = response.data.errCode;
      if (errCode === "ER_DUP_ENTRY") {
        alert("중복된 계정");
        return;
      }

      if (errCode === "INVALID_ACCOUNT") {
        alert("형식에 안맞는 계정");
        return;
      }
    }
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

    const specialCharRegex = /[`\\~!@#$%^&*|\'\";:\/?]/g;
    const specialCharCondition = value.match(specialCharRegex); // 특수문자 포함되면 true 반환

    const trueMsg = "올바른 형식입니다.";
    const falseMsg = "올바르지 않은 형식입니다. 다시 입력해주세요.";

    // 입력값 유효성 체크 로직
    switch (name) {
      case "id":
        /**
         * 형식 : 영어 소문자 + 숫자
         * 길이 : 5 ~ 12자리
         */
        const lowerCaseRegex = /[a-z]/g;
        const lowerCaseCondition = value.match(lowerCaseRegex);
        const idLenghtCondition = value.length >= 5 && value.length <= 12;

        if (lowerCaseCondition && idLenghtCondition) {
          changeValidState(name, trueMsg, true);
        } else if (value.length === 0) {
          changeValidState(name, "", false);
        } else {
          changeValidState(name, falseMsg, false);
        }

        break;

      case "password":
        /**
         * 형식 : 영어 대/소문자 + 숫자 + 특수문자
         * 길이 : 10 ~ 20 자리
         */
        const koreanRegex = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
        const koreanCondition = value.match(koreanRegex); // 한국어가 포함되면 true 반환

        const passwordLenghtCondition =
          value.length >= 10 && value.length <= 20;

        if (
          !koreanCondition &&
          specialCharCondition &&
          passwordLenghtCondition
        ) {
          changeValidState(name, trueMsg, true);
        } else if (value.length === 0) {
          changeValidState(name, "", false);
        } else {
          changeValidState(name, falseMsg, false);
        }

        break;

      case "rePassword":
        /**
         * 형식 : 비밀번호가 일치한지 확인
         */
        if (account.password !== value) {
          changeValidState(name, "비밀번호가 일치하지 않습니다.", false);
        } else {
          changeValidState(name, "비밀번호가 일치합니다.", true);
        }

        break;

      case "nickname":
        /**
         * 형식 : 특수문자를 제외한 문자
         * 길이 : 2 ~ 6자리
         */
        const nicknameLengthCondition = value.length >= 2 && value.length <= 6;
        if (nicknameLengthCondition && !specialCharCondition) {
          changeValidState(name, trueMsg, true);
        } else {
          changeValidState(name, falseMsg, false);
        }

        break;

      case "email":
        const emailCheckRegex =
          /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        const emailCheckCondition = value.match(emailCheckRegex);

        if (emailCheckCondition) {
          changeValidState(name, trueMsg, true);
        } else {
          changeValidState(name, falseMsg, false);
        }

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
