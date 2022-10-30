import styled from "styled-components";

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

  &:hover {
    cursor: pointer;
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

const ProfilePosts = ({ posts }: { posts: any[] }) => {
  return (
    <StyledProfilePosts>
      {posts.map((post) => (
        <PostItem key={post.postId}>
          <Sumbnail src={post.images[0]} />
        </PostItem>
      ))}
    </StyledProfilePosts>
  );
};

export default ProfilePosts;
