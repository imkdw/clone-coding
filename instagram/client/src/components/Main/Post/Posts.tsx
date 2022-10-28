import axios from "axios";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import config from "../../../config/config";
import { accessTokenState } from "../../../recoil/recoil";
import PostItem from "./PostItem";

const StyledPosts = styled.ul`
  position: relative;
  width: 470px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Posts = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  /** 게시글 로딩 */
  useEffect(() => {
    const loadPosts = async () => {
      const res = await axios.post(
        config.url.post.getPost,
        {},
        {
          headers: {
            Authorization: accessToken,
          },
        }
      );

      console.log(res);
    };

    loadPosts();
  }, []);
  return (
    <>
      <StyledPosts>
        <PostItem />
        <PostItem />
        <PostItem />
      </StyledPosts>
    </>
  );
};

export default Posts;
