import styled from "styled-components";
import { useRecoilState } from "recoil";
import { freeBoardState } from "../../../recoil/recoil";
import { ChangeEvent } from "react";

const StyledEditor = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 20px;
  height: 40px;
`;

const TextareaWrapper = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Textarea = styled.textarea`
  width: 98%;
  height: 180px;
  resize: none;
  outline: none;
  border: none;
`;

const ContentEditor = () => {
  const [freeBoard, setFreeBoard] = useRecoilState(freeBoardState);

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;
    setFreeBoard({
      ...freeBoard,
      content: value,
    });
  };

  return (
    <StyledEditor>
      <Label>내용</Label>
      <TextareaWrapper>
        <Textarea onChange={changeHandler} />
      </TextareaWrapper>
    </StyledEditor>
  );
};

export default ContentEditor;
