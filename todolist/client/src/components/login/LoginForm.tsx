import { ChangeEvent } from "react";
import styled from "styled-components";
import AuthInput from "../common/AuthInput";
import { useState } from "react";

const StyledForm = styled.form`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  margin-top: 300px;
`;

const StyleInputWrapper = styled.div`
  width: 500px;
  height: 80px;
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

function LoginForm() {
  type objectKeyType = {
    [key: string]: string;
  };

  const [account, setAccount] = useState<objectKeyType>({
    id: "",
    password: "",
  });

  const textData = [
    { type: "text", placeholder: "ID", id: "userId" },
    { type: "password", placeholder: "Password", id: "password" },
  ];

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  return (
    <StyledForm>
      {textData.map(({ type, placeholder, id }) => (
        <StyleInputWrapper key={id}>
          <AuthInput
            type={type}
            placeholder={placeholder}
            id={id}
            onChange={onChange}
            name={id}
            value={account[id]}
          />
        </StyleInputWrapper>
      ))}
      <StyledButton type="submit">Login</StyledButton>
    </StyledForm>
  );
}

export default LoginForm;
