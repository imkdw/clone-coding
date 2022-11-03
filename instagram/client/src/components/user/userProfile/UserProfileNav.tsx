import { useState, MouseEvent } from "react";
import styled from "styled-components";

/**
 * 액티브 : #262626
 * 논액티브 : #8E8E8E
 */
const StyledProfileNav = styled.ul`
  width: 100%;
  height: 53px;
  display: flex;
  justify-content: center;
  gap: 60px;
`;

const NavItem = styled.li<{ borderTop?: string }>`
  width: 57px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-top: ${(props) => props.borderTop || "none"};
  cursor: pointer;
`;

const NavItemIcon = styled.div``;

const NavItemText = styled.div`
  color: #262626;
  font-size: 12px;
`;

const PostIcon = () => {
  return (
    <svg
      aria-label=""
      color="#262626"
      fill="#262626"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
    >
      <rect
        fill="none"
        height="18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        width="18"
        x="3"
        y="3"
      ></rect>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="9.015"
        x2="9.015"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="14.985"
        x2="14.985"
        y1="3"
        y2="21"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="9.015"
        y2="9.015"
      ></line>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="21"
        x2="3"
        y1="14.985"
        y2="14.985"
      ></line>
    </svg>
  );
};

const SavedIcon = () => {
  return (
    <svg
      aria-label=""
      color="#8e8e8e"
      fill="#8e8e8e"
      height="12"
      role="img"
      viewBox="0 0 24 24"
      width="12"
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

const ProfileNav = () => {
  const [activeNav, setActiveNav] = useState("post");

  const activeNavHandler = (key: string) => {
    if (key === "post") {
      setActiveNav("post");
    } else {
      setActiveNav("saved");
    }
  };

  return (
    <StyledProfileNav>
      {activeNav === "post" ? (
        <>
          <NavItem
            borderTop="1px solid"
            onClick={() => {
              activeNavHandler("post");
            }}
          >
            <PostIcon />
            <NavItemText>게시물</NavItemText>
          </NavItem>
          <NavItem
            onClick={() => {
              activeNavHandler("saved");
            }}
          >
            <SavedIcon />
            <NavItemText>저장됨</NavItemText>
          </NavItem>
        </>
      ) : (
        <>
          <NavItem
            onClick={(event) => {
              activeNavHandler("post");
            }}
          >
            <PostIcon />
            <NavItemText>게시물</NavItemText>
          </NavItem>
          <NavItem
            borderTop="1px solid"
            onClick={(event) => {
              activeNavHandler("saved");
            }}
          >
            <SavedIcon />
            <NavItemText>저장됨</NavItemText>
          </NavItem>
        </>
      )}
    </StyledProfileNav>
  );
};
export default ProfileNav;
