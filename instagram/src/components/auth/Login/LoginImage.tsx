import styled from "styled-components";

import phone from "../../../assets/phone.png";
import phoneImage1 from "../../../assets/phone-image1.png";

const StyledLoginImage = styled.div`
  width: 350px;
  height: 570px;
  background-image: url(${phone});
  background-size: 435px 620px;
  background-position: -45px 0px;
  background-repeat: no-repeat;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledImageBox = styled.div`
  position: absolute;
  width: 237px;
  height: 530px;
  top: 27px;
  left: 99px;
`;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`;

const LoginImage = () => {
  return (
    <StyledLoginImage>
      <StyledImageBox>
        <StyledImg src={phoneImage1} />
      </StyledImageBox>
    </StyledLoginImage>
  );
};

export default LoginImage;
