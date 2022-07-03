import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../../recoil/TodoState";
import TodoItem from "./TodoItem";
import { v4 as uuid } from "uuid";

const StyledTodoWrapper = styled.ul`
  width: 320px;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

type todoListProps = {
  nowState: string;
};

function TodoList({ nowState }: todoListProps) {
  const todos = [
    {
      id: uuid(),
      subject: "리액트 공부",
      content:
        "doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!",
      createDate: "2022-07-02",
      state: "doing",
    },
    {
      id: uuid(),
      subject: "운동",
      content:
        "todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!",
      createDate: "2022-07-02",
      state: "todo",
    },
    {
      id: uuid(),
      subject: "백엔드 프레임워크 공부",
      content:
        "done!!done!!done!!done!!done!!done!!done!!done!!done!!done!!done!!done!!done!!done!!done!!done!!done!!",
      createDate: "2022-07-02",
      state: "done",
    },
  ];

  const [todoLists, setTodoLists] = useRecoilState(todoListState);

  useEffect(() => {
    setTodoLists(todos);
  }, []);

  console.log(todoLists);

  const onDragOver = (event: any) => {
    event.preventDefault();
  };

  const onDrop = (event: any) => {
    event.preventDefault();
    const todoId = event.dataTransfer.getData("todoId");
    const boxState = event.target.dataset.nowstate;

    const todoIndex = todoLists.findIndex((todo) => todo.id === todoId);
    const copyTodoLists: any = [...todoLists];
    copyTodoLists[todoIndex] = { ...copyTodoLists[todoIndex], state: boxState };

    setTodoLists(copyTodoLists);
  };

  return (
    <StyledTodoWrapper
      onDragOver={onDragOver}
      onDrop={onDrop}
      data-nowstate={nowState}
    >
      {todoLists.map((todo) => {
        if (nowState === todo.state) {
          return <TodoItem todo={todo} key={todo.id} />;
        }

        return null;
      })}
    </StyledTodoWrapper>
  );
}

export default TodoList;
