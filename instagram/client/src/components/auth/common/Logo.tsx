import styled from "styled-components";

import logo from "../../../assets/logo.png";

interface IStyledLogoProps {
  width: string;
  height: string;
}

const StyledLogo = styled.div<IStyledLogoProps>`
  width: ${(props) => props.width || "100%"};
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
  width: string;
  height: string;
}

const Logo = ({ width, height }: ILogoProps) => {
  return (
    <StyledLogo width={width} height={height}>
      <StyledLogoImage src={logo} alt="" />
    </StyledLogo>
  );
};

export default Logo;
