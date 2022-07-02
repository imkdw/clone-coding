import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const StyledHeaderText = styled.span`
  font-family: "Kanit", sans-serif;
  font-size: 40px;
  margin-left: 20px;
`;

function TodoBoxHeader({ text }: { text: string }) {
  return (
    <StyledHeader>
      <StyledHeaderText>{text}</StyledHeaderText>
    </StyledHeader>
  );
}

export default TodoBoxHeader;
