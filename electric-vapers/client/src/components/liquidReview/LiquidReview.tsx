import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlConfig } from "../../config";
import Header from "../writeLiqiudReview/common/Header";
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(urlConfig.post.getMtlLiquidReviews);

      if (res.status === 200) {
        setPosts(res.data.posts);
      }
    };

    getPosts();
  }, []);

  return (
    <StyledLiquidReview>
      {division === "mtl" ? <Header isEdit={false} title="입호흡" /> : <Header isEdit={false} title="폐호흡" />}

      <ReviewItems>
        {posts.map((post) => {
          const { postId, title, introduce, volume, nicoVolume, sumbnail } = post;
          return (
            <ReviewItem
              key={postId}
              postId={postId}
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
