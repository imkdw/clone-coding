import styled from "styled-components";

const StyledLabel = styled.label`
  font-family: "Kanit", sans-serif;
  font-weight: bold;
  font-size: 20px;
  height: 35px;
`;

type LabelProps = {
  label: string;
  htmlFor: string;
};

function Label({ label, htmlFor }: LabelProps) {
  return <StyledLabel htmlFor={htmlFor}>{label}</StyledLabel>;
}

export default Label;
