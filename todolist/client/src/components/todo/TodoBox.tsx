import styled from "styled-components";
import TodoBoxHeader from "./TodoBoxHeader";
import TodoList from "./TodoList";

type TodoBoxStyle = {
  bgColor: string;
};

const StyledTodoBox = styled.div<TodoBoxStyle>`
  width: 350px;
  height: 600px;
  background-color: ${(props) => props.bgColor};
  margin-top: 120px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

type TodoBoxProps = {
  bgColor: string;
  header: string;
  nowState: string;
};

function TodoBox({ bgColor, header, nowState }: TodoBoxProps) {
  return (
    <StyledTodoBox bgColor={bgColor}>
      <TodoBoxHeader text={header} />
      <TodoList nowState={nowState} />
    </StyledTodoBox>
  );
}

export default TodoBox;
