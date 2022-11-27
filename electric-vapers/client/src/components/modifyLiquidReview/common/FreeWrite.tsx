import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { liquidDataState, liquidInfoState } from "../../../recoil/recoil";
import { ILiquidInfo } from "../../../recoil/recoilType";

const StyledFreeWrite = styled.div`
  width: 100%;
  height: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  height: 25px;
  font-size: 20px;
`;

const TextareaWrapper = styled.div`
  width: 100%;
  height: 250px;
  min-height: 250px;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 95%;
  height: 95%;
  border: none;
  resize: none;
  outline: none;
  font-size: 18px;
`;

const FreeWrite = () => {
  const [liquidInfo, setLiquidInfo] = useRecoilState(liquidInfoState);

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.currentTarget;

    setLiquidInfo((prevState: ILiquidInfo) => {
      const review = { ...prevState.review };
      return { ...prevState, review: { ...review, content: value } };
    });
  };

  return (
    <StyledFreeWrite>
      <Title>자유롭게 작성!</Title>
      <TextareaWrapper>
        <TextArea placeholder="자유롭게 작성해주세요!" onChange={changeHandler} value={liquidInfo.review.content} />
      </TextareaWrapper>
    </StyledFreeWrite>
  );
};

export default FreeWrite;
