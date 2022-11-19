import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { liquidInfoState } from "../../../recoil/recoil";

const StyledIntroduce = styled.div`
  width: 100%;
  min-height: 70px;
  font-size: 30px;
  text-align: center;
  white-space: pre-wrap;
`;

const getTypeWord = (type: string) => {
  switch (type) {
    case "FR":
      return "과일류";
    case "DE":
      return "디저트류";
    case "DR":
      return "음료수류";
    case "SM":
      return "연초류";
  }
};

const Introduce = () => {
  const liquidInfo = useRecoilValue(liquidInfoState);
  const { type, introduce } = liquidInfo.post;
  return (
    <StyledIntroduce>
      #{getTypeWord(type)}액상 #{introduce}
    </StyledIntroduce>
  );
};

export default Introduce;
