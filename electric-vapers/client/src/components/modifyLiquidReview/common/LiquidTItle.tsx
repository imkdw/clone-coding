import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { liquidDataState, liquidInfoState } from "../../../recoil/recoil";
import { ILiquidInfo } from "../../../recoil/recoilType";

const StyleLiquidName = styled.div`
  width: 100%;
  height: 90px;
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  height: 25px;
  font-size: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 95%;
  height: 100%;
  border-radius: 20px;
  font-size: 16px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const LiquidName = () => {
  const [liquidInfo, setLiquidInfo] = useRecoilState(liquidInfoState);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setLiquidInfo((prevState: ILiquidInfo) => {
      const review = { ...prevState.review };
      return { ...prevState, review: { ...review, title: value } };
    });
  };

  return (
    <StyleLiquidName>
      <Title>액상 이름은?</Title>
      <InputWrapper>
        <Input
          type="text"
          placeholder="ex) 갱스터 알로에베라"
          onChange={changeHandler}
          value={liquidInfo.review.title}
        />
      </InputWrapper>
    </StyleLiquidName>
  );
};

export default LiquidName;
