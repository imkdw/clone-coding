import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { todoListState } from "../../recoil/TodoState";
import TodoItem from "./TodoItem";

const StyledTodoWrapper = styled.ul`
  width: 320px;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

type todoListProps = {
  nowState: string;
};

function TodoList({ nowState }: todoListProps) {
  const todos = [
    {
      id: 1,
      subject: "리액트 공부",
      content:
        "doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!doing!!",
      createDate: "2022-07-02",
      state: "doing",
    },
    {
      id: 2,
      subject: "운동",
      content:
        "todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!todo!!",
      createDate: "2022-07-02",
      state: "todo",
    },
    {
      id: 3,
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

  return (
    <StyledTodoWrapper>
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
