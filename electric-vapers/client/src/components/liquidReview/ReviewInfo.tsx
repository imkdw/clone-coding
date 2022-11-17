import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { urlConfig } from "../../config";

const StyledReviewInfo = styled.div``;

const ReviewInfo = () => {
  const [reviewData, setReviewData] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    const getLiquidReview = async () => {
      const res = await axios.get(urlConfig.post.getLiquidReview + postId);
      console.log(res);
    };

    getLiquidReview();
  }, []);
  return <StyledReviewInfo>{JSON.stringify(reviewData)}</StyledReviewInfo>;
};

export default ReviewInfo;
