import styled from "styled-components";

import profile from "../../../assets/profile.jpg";

const StyledPostAuthor = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
`;

const AuthorInfo = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
`;

const Profile = styled.div`
  width: 55px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const AuthorName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #262626;
  font-weight: bold;
`;

const Menu = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuIcon = () => {
  return (
    <svg
      aria-label="옵션 더 보기"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <circle cx="12" cy="12" r="1.5"></circle>
      <circle cx="6" cy="12" r="1.5"></circle>
      <circle cx="18" cy="12" r="1.5"></circle>
    </svg>
  );
};

const PostAuthor = () => {
  return (
    <StyledPostAuthor>
      <AuthorInfo>
        <Profile>
          <ProfileImage src={profile} />
        </Profile>
        <AuthorName>GunBungE</AuthorName>
      </AuthorInfo>
      <Menu>
        <MenuIcon />
      </Menu>
    </StyledPostAuthor>
  );
};

export default PostAuthor;
