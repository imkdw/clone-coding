import styled from "styled-components";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";

const StyledLogo = styled(Link)`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    width: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 768px) {
    width: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const LogoImage = styled.img`
  width: 130px;
  height: 70px;
`;

const Logo = () => {
  return (
    <StyledLogo to="/">
      <LogoImage src={logo} />
    </StyledLogo>
  );
};

export default Logo;
