import styled from "styled-components";
import ProfileInfo from "./ProfileInfo";

const StyledProfileBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
`;

const ProfileBox = () => {
  return (
    <StyledProfileBox>
      <ProfileInfo />
    </StyledProfileBox>
  );
};

export default ProfileBox;
