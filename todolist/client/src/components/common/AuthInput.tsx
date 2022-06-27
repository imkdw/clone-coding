import { ChangeEvent } from "react";
import styled from "styled-components";

type AuthInputProps = {
  type: string;
  placeholder: string;
  id: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  padding-left: 10px;
  font-family: "Kanit", sans-serif;
  font-size: 20px;
  background-color: transparent;
  border-bottom: 2px solid #b6abab;
`;

function AuthInput({ type, placeholder, id, onChange, name }: AuthInputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      name={name}
    />
  );
}

export default AuthInput;
