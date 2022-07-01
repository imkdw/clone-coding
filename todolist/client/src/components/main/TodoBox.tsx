import styled from "styled-components";

type TodoBoxStyle = {
  bgColor: string;
};

const StyledTodoBox = styled.div<TodoBoxStyle>`
  width: 350px;
  height: 600px;
  background-color: ${(props) => props.bgColor};
  margin-top: 120px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

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

type TodoBoxProps = {
  bgColor: string;
  header: string;
};

function TodoBox({ bgColor, header }: TodoBoxProps) {
  return (
    <StyledTodoBox bgColor={bgColor}>
      <StyledHeader>
        <StyledHeaderText>{header}</StyledHeaderText>
      </StyledHeader>
    </StyledTodoBox>
  );
}

export default TodoBox;
