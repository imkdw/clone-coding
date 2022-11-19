import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { liquidInfoState } from "../../../recoil/recoil";
import Carousel from "react-material-ui-carousel";

const StyledImages = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 800px;
  max-height: 400px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  border-radius: 10px;
`;

const StyledCarousel = styled(Carousel)`
  width: 700px;
  border-radius: 10px;
`;

const Images = () => {
  const liquidInfo = useRecoilValue(liquidInfoState);

  return (
    <StyledImages>
      <StyledCarousel autoPlay>
        {liquidInfo.images.map((image) => (
          <Image src={image} />
        ))}
      </StyledCarousel>
    </StyledImages>
  );
};

export default Images;
