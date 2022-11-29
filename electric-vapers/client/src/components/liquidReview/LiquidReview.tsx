import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlConfig } from "../../config";
import Header from "./writeReview/common/Header";
import ReviewItem from "./ReviewItem";

const StyledLiquidReview = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReviewItems = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 20px 2.3%;
  flex-wrap: wrap;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LiquidReview = ({ division }: { division: string }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getreviews = async () => {
      let url;
      if (division === "mtl") {
        url = urlConfig.review.getMtlLiquidReviews;
      } else {
        url = urlConfig.review.getDtlLiquidReviews;
      }

      const res = await axios.get(url);

      if (res.status === 200) {
        setReviews(res.data.reviews);
      }
    };

    getreviews();
  }, [division]);

  return (
    <StyledLiquidReview>
      {division === "mtl" ? <Header isEdit={false} title="입호흡" /> : <Header isEdit={false} title="폐호흡" />}

      <ReviewItems>
        {reviews.map((review) => {
          const { reviewId, title, introduce, volume, nicoVolume, sumbnail } = review;
          return (
            <ReviewItem
              key={reviewId}
              reviewId={reviewId}
              title={title}
              volume={volume}
              introduce={introduce}
              nicoVolume={nicoVolume}
              sumbnail={sumbnail}
            />
          );
        })}
      </ReviewItems>
    </StyledLiquidReview>
  );
};

export default LiquidReview;
