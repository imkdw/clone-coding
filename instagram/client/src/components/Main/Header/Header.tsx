import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import {
  profileMenuEnableState,
  searchResultState,
  showSearchResultState,
} from "../../../recoil/recoil";
import Logo from "../../auth/common/Logo";
import HeaderButtons from "./HeaderButtons";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import SearchResult from "./SearchResult";

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
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  /* 태블릿 */
  @media screen and (max-width: 1023px) {
    width: 100%;
  }

  /* 모바일 */
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const LogoBox = styled(Link)`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Header = () => {
  const [profileMenuEnable, setProfileMenuEnable] = useRecoilState(profileMenuEnableState);
  const [searchResult, setSearchResult] = useRecoilState(searchResultState);
  const [showSearchResult, setShowSearchResult] = useRecoilState(showSearchResultState);

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <LogoBox to="/main">
          <Logo width="103" height="29" />
        </LogoBox>
        <SearchBar />
        <HeaderButtons />
        {profileMenuEnable && <ProfileMenu />}
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
