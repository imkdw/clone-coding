import styled from "styled-components";

import banner from "../../assets/image/banner.jpg";

const StyledBanner = styled.div`
  width: 100%;
  height: 500px;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Banner = () => {
  return (
    <StyledBanner>
      <BannerImage src={banner} />
    </StyledBanner>
  );
};

export default Banner;
