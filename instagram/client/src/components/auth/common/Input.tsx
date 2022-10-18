import styled from "styled-components";
import { ChangeEvent, FocusEvent } from "react";

interface IStyledInputProps {
  height: string;
}

const StyledInput = styled.input<IStyledInputProps>`
  width: 258px;
  height: ${(props) => props.height};
  border: 1px solid #dbdbdb;
  outline: none;
  background-color: #fafafa;
  font-size: 12px;
  border-radius: 4px;
  padding-left: 10px;
`;

interface IInputProps {
  type: string;
  placeholder: string;
  height: string;
  value: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  name: string;
  onBlur?(event: FocusEvent<HTMLInputElement>): void;
}

const Input = ({ type, placeholder, height, value, onChange, name, onBlur }: IInputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      height={height}
      value={value}
      onChange={onChange}
      name={name}
      onBlur={onBlur}
    />
  );
};

export default Input;
