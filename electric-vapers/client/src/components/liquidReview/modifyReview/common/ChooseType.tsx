import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { liquidInfoState } from "../../../../recoil/recoil";
import { Dessert, Drink, Fruit, Smoke } from "./ChooseTypeIcon";
import { ILiquidInfo } from "../../../../recoil/recoilType";

const StyleChooseType = styled.div`
  width: 100%;
  height: 50px;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 220px;
    gap: 10px;
    margin-top: 0;
  }
`;

const Type = styled.div`
  width: 23%;
  height: 100%;
  border: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Checkbox = styled.input`
  width: 20%;
  height: 50%;
`;

const CheckboxLabel = styled.label`
  width: 80%;
  height: 100%;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const TypeText = styled.div`
  font-size: 15px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChooseType = () => {
  const [liquidInfo, setLiquidInfo] = useRecoilState(liquidInfoState);
  const { type } = liquidInfo.review;

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;

    setLiquidInfo((prevState: ILiquidInfo) => {
      const review = { ...prevState.review };
      return { ...prevState, review: { ...review, type: value } };
    });
  };

  return (
    <StyleChooseType>
      <Type>
        <Checkbox type="radio" id="fruit" name="type" value="FR" onChange={changeHandler} checked={type === "FR"} />
        <CheckboxLabel htmlFor="fruit">
          <IconWrapper>
            <Fruit />
          </IconWrapper>
          <TypeText>과일류액상</TypeText>
        </CheckboxLabel>
      </Type>
      <Type>
        <Checkbox type="radio" id="dessert" name="type" value="DE" onChange={changeHandler} checked={type === "DE"} />
        <CheckboxLabel htmlFor="dessert">
          <IconWrapper>
            <Dessert />
          </IconWrapper>
          <TypeText>디저트류액상</TypeText>
        </CheckboxLabel>
      </Type>
      <Type>
        <Checkbox type="radio" id="drink" name="type" value="DR" onChange={changeHandler} checked={type === "DR"} />
        <CheckboxLabel htmlFor="drink">
          <IconWrapper>
            <Drink />
          </IconWrapper>
          <TypeText>음료수류액상</TypeText>
        </CheckboxLabel>
      </Type>
      <Type>
        <Checkbox type="radio" id="smoke" name="type" value="SM" onChange={changeHandler} checked={type === "SM"} />
        <CheckboxLabel htmlFor="smoke">
          <IconWrapper>
            <Smoke />
          </IconWrapper>
          <TypeText>연초류액상</TypeText>
        </CheckboxLabel>
      </Type>
    </StyleChooseType>
  );
};

export default ChooseType;
