import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";

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

const ProfileBox = () => {
  return (
    <StyledProfileBox>
      <ProfileInfo />
    </StyledProfileBox>
  );
};

export default ProfileBox;
