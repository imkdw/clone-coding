import Logo from "../../auth/common/Logo";
import styled from "styled-components";

const StyledHeaderLogo = styled.div`
  width: 130px;
  height: 100%;
`;

const HeaderLogo = () => {
  return (
    <StyledHeaderLogo>
      <Logo width="130px" height="30px" />
    </StyledHeaderLogo>
  );
};

export default HeaderLogo;
