import { Link } from "react-router-dom";
import styled from "styled-components";

import liquid from "../../assets/liquid.jpg";

const StyledReviewItem = styled(Link)`
  width: 21%;
  height: 400px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: all 0.5;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Sumbnail = styled.img`
  width: 100%;
  height: 70%;
  border-radius: 10px 10px 0 0;
`;

const LiquidInfo = styled.div`
  width: 100%;
  height: 30%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LiquidName = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
`;

const LiquidVolumn = styled.div`
  width: 100%;
  font-size: 14px;
  color: #828282;
`;

const LiquidEval = styled.div`
  font-size: 15px;
`;

interface postData {
  postId: string;
  name: string;
  introduce: string;
  volume: string;
  nicoVolume: string;
  sumbnail: string;
}

const DtlReviewItem = ({ postId, name, introduce, volume, nicoVolume, sumbnail }: postData) => {
  return (
    <StyledReviewItem to="" key={postId}>
      <Sumbnail src={sumbnail} />
      <LiquidInfo>
        <LiquidName>{name}</LiquidName>
        <LiquidVolumn>
          용량 : {volume} / 니코틴 : {nicoVolume}
        </LiquidVolumn>
        <LiquidEval>#{introduce}</LiquidEval>
      </LiquidInfo>
    </StyledReviewItem>
  );
};

export default DtlReviewItem;
