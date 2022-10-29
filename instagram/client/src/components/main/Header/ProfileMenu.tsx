import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { accessTokenState, profileMenuEnableState } from "../../../recoil/recoil";

const StyledProfileMenu = styled.ul`
  width: 220px;
  height: 160px;
  position: absolute;
  right: 0;
  top: 50px;
  background-color: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
`;

const MenuItem = styled.li`
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 14px;
  color: #262626;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
  }
`;

const MenuIcon = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuText = styled(Link)`
  width: 80%;
  display: flex;
  align-items: center;
`;

const Logout = styled.div`
  width: 100%;
  height: 40px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  border-top: 1px solid #dbdbdb;
`;

const ProfileIcon = () => {
  return (
    <svg
      aria-label="프로필"
      className="_ab6-"
      color="#262626"
      fill="#262626"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <circle
        cx="12.004"
        cy="12.004"
        fill="none"
        r="10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></circle>
      <path
        d="M18.793 20.014a6.08 6.08 0 0 0-1.778-2.447 3.991 3.991 0 0 0-2.386-.791H9.38a3.994 3.994 0 0 0-2.386.791 6.09 6.09 0 0 0-1.779 2.447"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></path>
      <circle
        cx="12.006"
        cy="9.718"
        fill="none"
        r="4.109"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      ></circle>
    </svg>
  );
};

const SaveIcon = () => {
  return (
    <svg
      aria-label="저장됨"
      className="_ab6-"
      color="#262626"
      fill="#262626"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};

const ConfigIcon = () => {
  return (
    <svg
      aria-label="설정"
      className="_ab6-"
      color="#262626"
      fill="#262626"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <circle
        cx="12"
        cy="12"
        fill="none"
        r="8.635"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></circle>
      <path
        d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
    </svg>
  );
};

const ProfileMenu = () => {
  const navigator = useNavigate();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [profileMenuEnable, setProfileMenuEnable] = useRecoilState(profileMenuEnableState);

  const logoutHandler = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    navigator("/login");
  };

  const changePageHandler = () => {
    setProfileMenuEnable(false);
  };

  return (
    <StyledProfileMenu>
      <MenuItem>
        <MenuIcon>
          <ProfileIcon />
        </MenuIcon>
        <MenuText to="/profile" onClick={changePageHandler}>
          프로필
        </MenuText>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <SaveIcon />
        </MenuIcon>
        <MenuText to="#">저장됨</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuIcon>
          <ConfigIcon />
        </MenuIcon>
        <MenuText to="#">설정</MenuText>
      </MenuItem>
      <MenuItem onClick={logoutHandler}>
        <Logout>로그아웃</Logout>
      </MenuItem>
    </StyledProfileMenu>
  );
};

export default ProfileMenu;
