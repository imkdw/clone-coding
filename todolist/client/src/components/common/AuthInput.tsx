import styled from "styled-components";

type AuthInputProps = {
  type: string;
  placeholder: string;
  id: string;
};

const StyledInput = styled.input`
  width: 400px;
  height: 50px;
  border: none;
  padding-left: 10px;
`;

function AuthInput({ type, placeholder, id }: AuthInputProps) {
  return <StyledInput type={type} placeholder={placeholder} id={id} />;
}

export default AuthInput;
