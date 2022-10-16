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
}

const Form = ({ children, height }: IFormProps) => {
  console.log(children);
  return <StyledForm height={height}>{children}</StyledForm>;
};

export default Form;
