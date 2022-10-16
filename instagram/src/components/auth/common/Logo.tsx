import styled from "styled-components";

import logo from "../../../assets/logo.png";

interface IStyledLogoProps {
  height: string;
}

const StyledLogo = styled.div<IStyledLogoProps>`
  width: 100%;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLogoImage = styled.img`
  width: 175px;
  height: 51px;
`;

interface ILogoProps {
  height: string;
}

const Logo = ({ height }: ILogoProps) => {
  return (
    <StyledLogo height={height}>
      <StyledLogoImage src={logo} alt="" />
    </StyledLogo>
  );
};

export default Logo;
