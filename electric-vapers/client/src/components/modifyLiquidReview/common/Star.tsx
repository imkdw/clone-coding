import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { useRecoilState } from "recoil";
import { liquidDataState, liquidInfoState } from "../../../recoil/recoil";
import { ILiquidInfo } from "../../../recoil/recoilType";

const StyledStar = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 0 20px 20px 0;
`;

const Star = ({ title }: { title: string }) => {
  const maxStar = 5;
  const [liquidInfo, setLiquidInfo] = useRecoilState(liquidInfoState);

  const changeRating = (rating: number) => {
    setLiquidInfo((prevState: ILiquidInfo) => {
      const review = { ...prevState.review };
      const score = { ...review.score };
      score[title] = rating;
      return { ...prevState, review: { ...review, score: { ...score } } };
    });
  };

  return (
    <StyledStar>
      <StarRatings
        rating={liquidInfo.review.score[title]}
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
