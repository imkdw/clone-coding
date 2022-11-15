import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { urlConfig } from "../../config";
import Header from "./Header";
import ReviewItem from "./LiquidReviewItem";

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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const SetScroll = styled.button`
  width: 50px;
  height: 50px;
  background-color: antiquewhite;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ArrowUpIcon = () => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_99_1798)">
        <path
          d="M25.0002 13.9999C24.8686 14.0007 24.7381 13.9755 24.6163 13.9257C24.4944 13.8759 24.3836 13.8026 24.2902 13.7099L16.0002 5.40994L7.71019 13.7099C7.52188 13.8982 7.26649 14.004 7.00019 14.004C6.73388 14.004 6.47849 13.8982 6.29019 13.7099C6.10188 13.5216 5.99609 13.2662 5.99609 12.9999C5.99609 12.7336 6.10188 12.4782 6.29019 12.2899L15.2902 3.28994C15.3831 3.19621 15.4937 3.12182 15.6156 3.07105C15.7375 3.02028 15.8682 2.99414 16.0002 2.99414C16.1322 2.99414 16.2629 3.02028 16.3848 3.07105C16.5066 3.12182 16.6172 3.19621 16.7102 3.28994L25.7102 12.2899C25.8039 12.3829 25.8783 12.4935 25.9291 12.6154C25.9798 12.7372 26.006 12.8679 26.006 12.9999C26.006 13.132 25.9798 13.2627 25.9291 13.3845C25.8783 13.5064 25.8039 13.617 25.7102 13.7099C25.6167 13.8026 25.5059 13.8759 25.3841 13.9257C25.2623 13.9755 25.1318 14.0007 25.0002 13.9999Z"
          fill="#0095f6"
        />
        <path
          d="M16 29C15.7348 29 15.4804 28.8946 15.2929 28.7071C15.1054 28.5196 15 28.2652 15 28V4C15 3.73478 15.1054 3.48043 15.2929 3.29289C15.4804 3.10536 15.7348 3 16 3C16.2652 3 16.5196 3.10536 16.7071 3.29289C16.8946 3.48043 17 3.73478 17 4V28C17 28.2652 16.8946 28.5196 16.7071 28.7071C16.5196 28.8946 16.2652 29 16 29Z"
          fill="#0095f6"
        />
      </g>
      <defs>
        <clipPath id="clip0_99_1798">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const LiquidReview = () => {
  const [posts, setPosts] = useState([]);

  const clickHandler = () => {
    window.scrollTo(0, 0);
  };

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
      <Header isEdit={false} />
      <ReviewItems>
        {posts.map((post) => {
          const { postId, name, introduce, volume, nicoVolume, sumbnail } = post;
          return (
            <ReviewItem
              postId={postId}
              name={name}
              volume={volume}
              introduce={introduce}
              nicoVolume={nicoVolume}
              sumbnail={sumbnail}
            />
          );
        })}
      </ReviewItems>
      <SetScroll onClick={clickHandler}>
        <ArrowUpIcon />
      </SetScroll>
    </StyledLiquidReview>
  );
};

export default LiquidReview;
