import TodoBox from "./TodoBox";
import styled from "styled-components";

const StyledTodoBoxWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;

function MainPage() {
  return (
    <StyledTodoBoxWrapper>
      <TodoBox bgColor="#C5DCD5" header="Todo" />
      <TodoBox bgColor="#A9C5B9" header="Doing..." />
      <TodoBox bgColor="#B6ABAB" header="Done!" />
    </StyledTodoBoxWrapper>
  );
}

export default MainPage;
