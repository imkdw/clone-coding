import styled from "styled-components";
import TodoButtons from "./TodoButtons";
import TodoContents from "./TodoContents";

type TodoItemProps = {
  todo: {
    id: number;
    subject: string;
    state: string;
    content: string;
    createDate: string;
  };
};

const StyledTodo = styled.li`
  width: 100%;
  height: 90px;
  background-color: #f5f0bb;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  display: flex;
  align-items: center;
`;

const onDragStart = (event: any) => {
  event.dataTransfer.setData("data", "data");
};

function TodoItem({ todo }: TodoItemProps) {
  return (
    <StyledTodo draggable onDragStart={onDragStart}>
      <TodoContents todo={todo} />
      <TodoButtons />
    </StyledTodo>
  );
}

export default TodoItem;
