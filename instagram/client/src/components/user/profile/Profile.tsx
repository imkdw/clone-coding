import styled from "styled-components";
import Header from "../../main/Header/Header";
import ProfileBox from "./ProfileBox";

const StyledProfile = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
`;

const Profile = () => {
  return (
    <StyledProfile>
      <Header />
      <ProfileBox />
    </StyledProfile>
  );
};

export default Profile;
