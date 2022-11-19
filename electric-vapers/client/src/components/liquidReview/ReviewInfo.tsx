import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { urlConfig } from "../../config";
import { liquidInfoState } from "../../recoil/recoil";
import Comment from "./reviewInfo/comment/Comment";
import Content from "./reviewInfo/Content";
import Images from "./reviewInfo/Images";
import Introduce from "./reviewInfo/Introduce";
import ReviewHeader from "./reviewInfo/ReviewHeader";
import Score from "./reviewInfo/Score";
import Volume from "./reviewInfo/Volume";

const StyledReviewInfo = styled.div`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (max-width: 768px) {
    width: 95%;
  }
`;

const ReviewInfo = () => {
  const [liquidInfo, setLiquidInfo] = useRecoilState(liquidInfoState);
  const { postId } = useParams();

  useEffect(() => {
    const getLiquidReview = async () => {
      const res = await axios.get(urlConfig.post.getLiquidReview + postId);
      setLiquidInfo({
        ...liquidInfo,
        ["post"]: res.data.post,
        ["images"]: res.data.images,
      });
    };

    getLiquidReview();
  }, []);

  return (
    <StyledReviewInfo>
      <ReviewHeader />
      <Introduce />
      <Images />
      <Volume />
      <Score />
      <Content />
      <Comment />
    </StyledReviewInfo>
  );
};

export default ReviewInfo;
