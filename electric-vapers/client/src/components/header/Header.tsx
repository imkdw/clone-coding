import styled from "styled-components";
import Link from "./Links";
import Logo from "./Logo";
import Menu from "./Menu";
import { showSideMenuState } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

const StyledHeader = styled.div<{ position?: string }>`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  position: ${(props) => props.position || "fixed"};
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  margin-left: 10px;
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
  }

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

const Header = ({ position }: { position?: string }) => {
  /** 사이드메뉴 표시여부를 제어하는 전역상태 */
  const [showSideMenu, setShowSideMenu] = useRecoilState(showSideMenuState);

  const clickHandler = () => {
    /**
     * 사이드메뉴 활성화 여부를 제어하는 핸들러
     * 기존 활성화시 : 메뉴를 닫고 body에 대해서 Y축을 scroll로 설정
     * 기존 비활성화시 : 메뉴를 열고 body에 대해서 Y축을 hidden으로 설정
     */
    if (showSideMenu) {
      setShowSideMenu(false);
      document.body.style.overflowY = "scroll";
    } else {
      setShowSideMenu(true);
      document.body.style.overflowY = "hidden";
    }
  };

  return (
    <StyledHeader position={position}>
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
