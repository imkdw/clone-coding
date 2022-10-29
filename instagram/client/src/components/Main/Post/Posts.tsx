import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import config from "../../../config/config";
import { accessTokenState } from "../../../recoil/recoil";
import { IPost } from "../../../types/post";
import PostItem from "./PostItem";

const StyledPosts = styled.ul`
  position: relative;
  width: 470px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ErrorElem = styled.div`
  width: 100%;
  text-align: center;
  font-size: 40px;
`;

const Posts = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState([]);

  /** 게시글 로딩 */
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      setError(null);
      const res = await axios.get(config.url.post.getPost, {
        headers: {
          Authorization: accessToken,
        },
      });

      if (res.data.length === 0) {
        setError("No Posts");
        setIsLoading(false);
      }

      setPosts(res.data);
      setIsLoading(false);
    };

    if (accessToken) {
      loadPosts();
    }
  }, [accessToken]);
  return (
    <>
      <StyledPosts>
        {error ? (
          <ErrorElem>{error}</ErrorElem>
        ) : (
          <>
            {posts.map((post: IPost) => (
              <PostItem
                key={post.postId}
                author={post.author}
                content={post.content}
                images={post.images}
                likeCount={post.likeCount}
                profile={post.profile}
                createdAt={post.createdAt}
                nickname={post.nickname}
              />
            ))}
          </>
        )}
      </StyledPosts>
    </>
  );
};

export default Posts;
