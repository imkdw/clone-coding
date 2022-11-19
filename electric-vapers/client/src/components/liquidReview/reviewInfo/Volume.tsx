import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { liquidInfoState } from "../../../recoil/recoil";

const StyledVolume = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 40px;
  text-align: center;
  font-size: 18px;
`;

const Volume = () => {
  const liquidInfo = useRecoilValue(liquidInfoState);
  const { volume, nicoVolume } = liquidInfo.post;

  return (
    <StyledVolume>
      용량 : {volume}ml, 니코틴량 : {nicoVolume}mg
    </StyledVolume>
  );
};

export default Volume;
