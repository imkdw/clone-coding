import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

const StyledButtonWrapper = styled.div`
  width: 70px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledIconWrapper = styled.div`
  width: 35px;
  font-size: 20px;
`;

const StyledFaPencilAlt = styled(FaPencilAlt)`
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    color: blue;
  }
`;

function TodoButtons() {
  return (
    <StyledButtonWrapper>
      <StyledIconWrapper>
        <StyledFaPencilAlt />
      </StyledIconWrapper>
    </StyledButtonWrapper>
  );
}

export default TodoButtons;
