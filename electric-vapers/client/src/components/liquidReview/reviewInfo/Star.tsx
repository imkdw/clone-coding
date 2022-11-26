import styled from "styled-components";
import StarRatings from "react-star-ratings";
import { useRecoilValue } from "recoil";
import { liquidInfoState } from "../../../recoil/recoil";

const StyledStar = styled.div`
  width: 70%;
  height: 100%;
  border-radius: 0 20px 20px 0;
  display: flex;
`;

const Star = ({ title }: { title: string }) => {
  const maxStar = 5;
  const liquidInfo = useRecoilValue(liquidInfoState);

  const getRating = (title: string): number => {
    switch (title) {
      case "단맛":
        return liquidInfo.post.score.sweet;
      case "멘솔":
        return liquidInfo.post.score.mensol;
      case "목긁음":
        return liquidInfo.post.score.neck;
      case "상큼함":
        return liquidInfo.post.score.fresh;
      default:
        return 0;
    }
  };

  return (
    <StyledStar>
      <StarRatings
        rating={getRating(title)}
        starRatedColor="rgb(204, 204, 000)"
        numberOfStars={maxStar}
        name="rating"
        starDimension="25px"
      />
    </StyledStar>
  );
};

export default Star;
