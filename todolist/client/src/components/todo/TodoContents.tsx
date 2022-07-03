import styled from "styled-components";

type TodoContentsProps = {
  todo: {
    id: string;
    subject: string;
    state: string;
    content: string;
    createDate: string;
  };
};

const StyledTodoContents = styled.div`
  width: 250px;
  height: 80px;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

type todoTextProps = {
  fontSize: string;
  display?: string;
  fontWeight?: string;
  alignItems?: string;
};

const StyledTodoText = styled.div<todoTextProps>`
  width: 250px;
  height: 25px;
  max-width: 250px;
  max-height: 30px;
  font-family: "Roboto", sans-serif;
  margin-left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  display: ${(props) => (props.display ? props.display : "block")};
  align-items: ${(props) => props.alignItems};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

const StyledTextWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

function TodoContents({ todo }: TodoContentsProps) {
  return (
    <StyledTodoContents>
      <StyledTodoText fontSize="20px" fontWeight="bold">
        <StyledTextWrapper>{todo.subject}</StyledTextWrapper>
      </StyledTodoText>
      <StyledTodoText fontSize="16px" display="flex" alignItems="flex-end">
        <StyledTextWrapper>{todo.content}</StyledTextWrapper>
      </StyledTodoText>
      <StyledTodoText fontSize="12px" display="flex" alignItems="flex-end">
        <StyledTextWrapper>작성일 : {todo.createDate}</StyledTextWrapper>
      </StyledTodoText>
    </StyledTodoContents>
  );
}

export default TodoContents;
