import { FormEvent } from "react";
import styled from "styled-components";

interface IStyledForm {
  height: string;
}

const StyledForm = styled.form<IStyledForm>`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

interface IFormProps {
  children: React.ReactNode;
  height: string;
  onSubmit?(event: FormEvent<HTMLFormElement>): any;
}

const Form = ({ children, height, onSubmit }: IFormProps) => {
  return (
    <StyledForm height={height} onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
};

export default Form;
