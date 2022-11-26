import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { liquidDataState } from "../../../recoil/recoil";

const StyledStar = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 0 20px 20px 0;
`;

const HiddenInput = styled.input`
  display: none;
`;

interface IRating {
  [key: string]: number;
}

const Star = ({ title }: { title: string }) => {
  const maxStar = 5;
  const [mtlLiquidData, setMtlLiquidData] = useRecoilState(liquidDataState);
  const { score } = mtlLiquidData;

  const changeRating = (rating: number) => {
    setMtlLiquidData((mtlLiquidData: any) => {
      return { ...mtlLiquidData, score: { ...score, [title]: rating } };
    });
  };

  return (
    <StyledStar>
      <StarRatings
        rating={mtlLiquidData.score[title]}
        starRatedColor="rgb(204, 204, 000)"
        starHoverColor="rgb(255,255,000)"
        changeRating={(rating: number) => {
          changeRating(rating);
        }}
        numberOfStars={maxStar}
        name="rating"
        starDimension="25px"
      />
    </StyledStar>
  );
};

export default Star;
