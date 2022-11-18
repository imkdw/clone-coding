import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { liquidDataState } from "../../../recoil/recoil";
import { ILiquidData } from "../../../types/liquid";

const StyledLiquidInfo = styled.div`
  width: 100%;
  height: 90px;
  min-height: 90px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 250px;
  }
`;

const Data = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-evenly;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 25px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
  }
`;

const InfoBox = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  gap: 20px;
`;

const InfoData = styled.div`
  width: 47%;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #dbdbdb;
  display: flex;
`;

const InfoTitle = styled.div`
  width: 25%;
  height: 100%;
  border-radius: 20px 0 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-right: 1px solid #dbdbdb;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const InfoSelect = styled.select`
  width: 55%;
  height: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 20px;
`;

const InfoOption = styled.option`
  height: 20px;
`;

const InfoUnit = styled.div`
  width: 20%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-left: 1px solid #dbdbdb;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Input = styled.input`
  width: 93%;
  height: 100%;
  font-size: 16px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
`;

interface LiquidInfoProps {
  volume: number[];
  nicoVolume: number[];
}

const LiquidInfo = ({ volume, nicoVolume }: LiquidInfoProps) => {
  const [liquidData, setliquidData] = useRecoilState(liquidDataState);
  const { info } = liquidData;

  const infoChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget;

    setliquidData((liquidData: any) => {
      return { ...liquidData, info: { ...info, [name]: value } };
    });
  };

  const introChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setliquidData((liquidData: any) => {
      return { ...liquidData, ["introduce"]: value };
    });
  };

  return (
    <StyledLiquidInfo>
      <Data>
        <Title>액상 정보</Title>
        <InfoBox>
          <InfoData>
            <InfoTitle>용량</InfoTitle>
            <InfoSelect onChange={infoChangeHandler} name="volume" value={liquidData.info.volume}>
              {volume.map((item) => (
                <InfoOption value={item}>{item}</InfoOption>
              ))}
              {/* <InfoOption value="30">30</InfoOption>
              <InfoOption value="60">60</InfoOption>
              <InfoOption value="100">100</InfoOption>
              <InfoOption value="120">120</InfoOption>
              <InfoOption value="200">200</InfoOption> */}
            </InfoSelect>
            <InfoUnit>ml</InfoUnit>
          </InfoData>
          <InfoData>
            <InfoTitle>니코틴</InfoTitle>
            <InfoSelect onChange={infoChangeHandler} name="nicoVolume" value={liquidData.info.nicoVolume}>
              {nicoVolume.map((item) => (
                <InfoOption value={item}>{item}</InfoOption>
              ))}
              {/* <InfoOption value="6">6</InfoOption>
              <InfoOption value="9">9</InfoOption> */}
            </InfoSelect>
            <InfoUnit>mg</InfoUnit>
          </InfoData>
        </InfoBox>
      </Data>
      <Data>
        <Title>액상을 한줄로 표현하면?</Title>
        <InputWrapper>
          <Input
            type="text"
            placeholder="ex) 시원한 청포도를 먹는느낌"
            value={liquidData.introduce}
            name="introduce"
            onChange={introChangeHandler}
          />
        </InputWrapper>
      </Data>
    </StyledLiquidInfo>
  );
};

export default LiquidInfo;
