import styled from "styled-components";
import { Button } from "antd";

const StyledButtons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
`;

const Buttons = () => {
  const modifyHandler = () => {};
  const deleteHandler = () => {};

  return (
    <StyledButtons>
      <Button type="primary" onClick={modifyHandler}>
        수정하기
      </Button>
      <Button type="primary" onClick={deleteHandler} danger>
        삭제하기
      </Button>
    </StyledButtons>
  );
};

export default Buttons;
