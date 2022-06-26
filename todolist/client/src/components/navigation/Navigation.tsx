import styled from "styled-components";
import Logo from "./Logo";
import PageLink from "./PageLink";

const StyledNavigation = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: #a9c5b9;
`;

const NavigationWrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

function Navigation() {
  return (
    <StyledNavigation>
      <NavigationWrapper>
        <Logo />
        <PageLink />
      </NavigationWrapper>
    </StyledNavigation>
  );
}

export default Navigation;
