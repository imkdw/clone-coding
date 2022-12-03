import styled from "styled-components";
import { ChangeEvent } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { freeBoardState } from "../../../recoil/recoil";

const StyledTitle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  height: 40px;
  font-size: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 98%;
  height: 40px;
  border: none;
`;

const Title = () => {
  const [freeBoard, setFreeBoard] = useRecoilState(freeBoardState);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFreeBoard((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  return (
    <StyledTitle>
      <Label>제목</Label>
      <InputWrapper>
        <Input
          type="text"
          name="title"
          value={freeBoard.title}
          onChange={changeHandler}
          placeholder="제목을 입력하세요"
        />
      </InputWrapper>
    </StyledTitle>
  );
};

export default Title;
