import styled from "styled-components";
import Logo from "../../auth/common/Logo";
import HeaderButtons from "./HeaderButtons";
import SearchBar from "./SearchBar";

const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LogoBox = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <LogoBox>
          <Logo width="103" height="29" />
        </LogoBox>
        <SearchBar />
        <HeaderButtons />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
