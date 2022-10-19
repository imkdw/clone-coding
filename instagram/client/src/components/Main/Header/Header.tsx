import styled from "styled-components";
import HeaderLogo from "./HeaderLogo";

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
`;

const StyledHeaderWrapper = styled.div`
  width: 80%;
  max-width: 950px;
  height: 100%;
  border: 1px solid;
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <HeaderLogo />
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

export default Header;
