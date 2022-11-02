import styled from "styled-components";
import Header from "../../main/Header/Header";
import ProfileBox from "./ProfileBox";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenState, loggedInUserState } from "../../../recoil/recoil";
import axios from "axios";
import config from "../../../config/config";

const StyledProfile = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: center;
`;

const Profile = () => {
  const navigator = useNavigate();
  const localStorageAccessToken = localStorage.getItem("accessToken");
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState);
  const [posts, setPosts] = useState([]);

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

      try {
        const res = await axios.get(config.url.user.getProfile, axiosConfig);
        if (res.status === 200) {
          const { email, name, nickname, profile, introduce, postData } = res.data;
          setLoggedInUser({
            ...loggedInUser,
            email,
            name,
            nickname,
            profile,
            introduce,
          });
          setPosts(postData);
        }
      } catch (err: any) {
        if (err.response.status === 401) {
          alert("세션이 만료되었습니다. 다시 로그인 해주세요");
          navigator("/login");
        }
      }
    };

    if (localStorageAccessToken) {
      loadProfile();
    }
  }, [localStorageAccessToken]);
  return (
    <StyledProfile>
      <ProfileBox posts={posts} />
    </StyledProfile>
  );
};

export default Profile;
