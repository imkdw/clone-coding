import styled from "styled-components";
import ProfileInfo from "./UserProfileInfo";
import ProfileNav from "./UserProfileNav";
import ProfilePosts from "./UserProfilePosts";

const StyledProfileBox = styled.div`
  width: 50%;
  height: 100%;

  @media screen and (max-width: 1023px) {
    width: 90%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const ProfileBox = ({ posts }: { posts: any[] }) => {
  return (
    <StyledProfileBox>
      <ProfileInfo />
      <ProfileNav />
      <ProfilePosts posts={posts} />
    </StyledProfileBox>
  );
};

export default ProfileBox;
