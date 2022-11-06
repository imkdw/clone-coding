import styled from "styled-components";
import Link from "./Links";
import Logo from "./Logo";
import Menu from "./Menu";
import { useState } from "react";
import SideMenu from "./SideMenu";

const StyledHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: white;
  border-bottom: 1px solid #dbdbdb;
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MenuButtonImage = () => {
  return (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 0H0V2H22V0Z" fill="#B6B6B6" />
      <path d="M22 9H0V11H22V9Z" fill="#B6B6B6" />
      <path d="M22 18H0V20H22V18Z" fill="#B6B6B6" />
    </svg>
  );
};

const Header = () => {
  const [enableSideMenu, setEnableSideMenu] = useState(false);

  /** 메뉴버튼 클릭시 사이드메뉴 활성화/비활성화 */
  const clickHandler = () => {
    if (enableSideMenu) {
      setEnableSideMenu(false);
    } else {
      setEnableSideMenu(true);
    }
  };

  return (
    <StyledHeader>
      {enableSideMenu && <SideMenu />}
      <MenuButton onClick={clickHandler}>
        <MenuButtonImage />
      </MenuButton>
      <Logo />
      <Menu />
      <Link />
    </StyledHeader>
  );
};

export default Header;
