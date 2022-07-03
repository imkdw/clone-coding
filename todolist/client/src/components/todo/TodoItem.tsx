import styled from "styled-components";
import { useRecoilState } from "recoil";
import { todoListState } from "../../recoil/TodoState";
import TodoButtons from "./TodoButtons";
import TodoContents from "./TodoContents";

type TodoItemProps = {
  todo: {
    id: string;
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

function TodoItem({ todo }: TodoItemProps) {
  const [todoLists, setTodoLists] = useRecoilState(todoListState);

  const onDragStart = (event: any) => {
    const todoId = event.target.dataset.id;
    event.dataTransfer.setData("todoId", todoId);
  };

  const onDragOver = (event: any) => {
    event.preventDefault();
  };

  const onDrop = (event: any) => {
    event.preventDefault();
  };

  return (
    <StyledTodo
      draggable
      onDragStart={onDragStart}
      data-id={todo.id}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <TodoContents todo={todo} />
      <TodoButtons />
    </StyledTodo>
  );
}

export default TodoItem;
