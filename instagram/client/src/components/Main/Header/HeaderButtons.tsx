import styled from "styled-components";

import profile from "../../../assets/profile.jpg";
import { useRecoilState } from "recoil";
import { modalEnableState, profileMenuEnableState } from "../../../recoil/recoil";
import { useState, MouseEvent } from "react";
import ProfileMenu from "./ProfileMenu";

const StyledHeaderButtons = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
`;

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 100%;
  cursor: pointer;
`;

const ProfileImage = styled.img<{ border?: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${(props) => props.border || "none"};
`;

const Home = () => {
  return (
    <svg
      aria-label="홈"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path>
    </svg>
  );
};

const DirectMessage = () => {
  return (
    <svg
      aria-label="Direct"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <line
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      ></line>
      <polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polygon>
    </svg>
  );
};

const AddStory = () => {
  return (
    <svg
      aria-label="새로운 게시물"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="6.545"
        x2="17.455"
        y1="12.001"
        y2="12.001"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="12.003"
        x2="12.003"
        y1="6.545"
        y2="17.455"
      ></line>
    </svg>
  );
};

const ActivityLog = () => {
  return (
    <svg
      aria-label="활동 피드"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
    </svg>
  );
};

const HeaderButtons = () => {
  const [isModalEnable, setIsModalEnable] = useRecoilState(modalEnableState);
  const [profileMenuEnable, setProfileMenuEnable] = useRecoilState(profileMenuEnableState);

  const openModalHandler = () => {
    setIsModalEnable(true);
    document.body.style.overflowY = "hidden";
  };

  const profileClickHandler = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (profileMenuEnable) {
      setProfileMenuEnable(false);
    } else {
      setProfileMenuEnable(true);
    }
  };

  return (
    <StyledHeaderButtons>
      <HeaderButton>
        <Home />
      </HeaderButton>
      <HeaderButton>
        <DirectMessage />
      </HeaderButton>
      <HeaderButton onClick={openModalHandler}>
        <AddStory />
      </HeaderButton>
      <HeaderButton>
        <ActivityLog />
      </HeaderButton>
      <HeaderButton onClick={profileClickHandler}>
        {profileMenuEnable ? (
          <>
            <ProfileImage src={profile} alt="" border="1px solid" />
          </>
        ) : (
          <ProfileImage src={profile} alt="" />
        )}
      </HeaderButton>
    </StyledHeaderButtons>
  );
};

export default HeaderButtons;
