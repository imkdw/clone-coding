import { useSetRecoilState } from "recoil";
import styled from "styled-components";

const StyledButtons = styled.div`
  width: 100%;
  height: 80px;
  min-height: 80px;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 150px;
  height: 70%;
  color: #0095f6;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: #dbdbdb;
  }
`;

const Buttons = () => {
  return (
    <StyledButtons>
      <Button type="submit">작성하기</Button>
      <Button>취소하기</Button>
    </StyledButtons>
  );
};

export default Buttons;
