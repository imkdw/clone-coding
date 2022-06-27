import styled from "styled-components";

const StyledStateBox = styled.div`
  width: 100%;
  height: 30px;
  font-family: "Kanit", sans-serif;
  color: red;
  opacity: 0.5;
`;

type StateBoxProps = {
  message: string;
};

function StateBox({ message }: StateBoxProps) {
  return <StyledStateBox>{message}</StyledStateBox>;
}

export default StateBox;
