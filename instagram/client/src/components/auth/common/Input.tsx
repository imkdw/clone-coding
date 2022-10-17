import styled from "styled-components";

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
}

const Input = ({ type, placeholder, height }: IInputProps) => {
  return <StyledInput type={type} placeholder={placeholder} height={height} />;
};

export default Input;
