import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { liquidDataState } from "../../../../recoil/recoil";

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
  const [liquidData, setLiquidData] = useRecoilState(liquidDataState);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setLiquidData((liquidData) => {
      return { ...liquidData, title: value };
    });
  };

  return (
    <StyleLiquidName>
      <Title>액상 이름은?</Title>
      <InputWrapper>
        <Input type="text" placeholder="ex) 갱스터 알로에베라" onChange={changeHandler} value={liquidData.title} />
      </InputWrapper>
    </StyleLiquidName>
  );
};

export default LiquidName;
