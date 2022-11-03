import { useRef, useState } from "react";
import styled from "styled-components";
import background from "../../../assets/background.png";

const StyledProfilePosts = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: start;

  @media screen and (max-width: 767px) {
    gap: 3px;
  }
`;

const PostItem = styled.li`
  width: 300px;
  height: 300px;
  background-color: antiquewhite;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1023px) {
    width: 270px;
    height: 270px;
  }

  @media screen and (max-width: 767px) {
    width: 136px;
    height: 136px;
  }
`;

const Sumbnail = styled.img`
  width: 100%;
  height: 100%;
`;

const PostItemDesc = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const DescContent = styled.div`
  width: 70px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

interface ContentIconProps {
  backgroundImage: string;
  backgroundPosition: string;
}

const ContentIcon = styled.div<ContentIconProps>`
  width: 19px;
  height: 19px;
  background-image: url(${(props) => props.backgroundImage});
  background-position: ${(props) => props.backgroundPosition};
  background-repeat: no-repeat;
`;

const ContentCount = styled.div`
  font-size: 16px;
  color: white;
`;

const ProfilePosts = ({ posts }: { posts: any[] }) => {
  const [descEnable, setDescEnable] = useState({
    postId: "",
    enable: false,
  });

  const descEnableHandler = (postId: string) => {
    console.log(postId);
    setDescEnable({
      ...descEnable,
      postId,
      enable: true,
    });
  };

  const descDisableHandler = () => {
    setDescEnable({
      ...descEnable,
      postId: "",
      enable: false,
    });
  };

  console.log(posts);

  return (
    <StyledProfilePosts>
      {posts.map((post) => (
        <PostItem
          key={post.postId}
          onMouseEnter={() => {
            descEnableHandler(post.postId);
          }}
          onMouseLeave={descDisableHandler}
        >
          <Sumbnail src={post.images[0]} />
          {descEnable.enable && descEnable.postId === post.postId && (
            <PostItemDesc>
              <DescContent>
                <ContentIcon backgroundImage={background} backgroundPosition="-340px -333px" />
                <ContentCount>{post.likeCount}</ContentCount>
              </DescContent>
              <DescContent>
                <ContentIcon backgroundImage={background} backgroundPosition="-382px -333px" />
                <ContentCount>{post.commentsCount}</ContentCount>
              </DescContent>
            </PostItemDesc>
          )}
        </PostItem>
      ))}
    </StyledProfilePosts>
  );
};

export default ProfilePosts;
