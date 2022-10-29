import styled from "styled-components";
import Header from "../../main/Header/Header";
import ProfileBox from "./ProfileBox";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenState, loggedInUserState } from "../../../recoil/recoil";
import axios from "axios";
import config from "../../../config/config";

const StyledProfile = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
`;

const Profile = () => {
  const navigator = useNavigate();
  const localStorageAccessToken = localStorage.getItem("accessToken");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState);

  useEffect(() => {
    const loadProfile = async () => {
      if (!localStorageAccessToken && !accessToken) {
        alert("올바르지 않은 접근입니다.");
        navigator("/login");
      }

      const axiosConfig = {
        headers: {
          Authorization: localStorageAccessToken,
        },
      };

      const res = await axios.get(config.url.user.getProfile, axiosConfig);

      if (res.status === 200) {
        const { email, name, nickname, profile, introduce } = res.data;
        setLoggedInUser({
          ...loggedInUser,
          email,
          name,
          nickname,
          profile,
          introduce,
        });
      }
    };

    loadProfile();
  }, [accessToken]);
  return (
    <StyledProfile>
      <Header />
      <ProfileBox />
    </StyledProfile>
  );
};

export default Profile;
