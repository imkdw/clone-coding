import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { liquidInfoState } from "../../../../recoil/recoil";

const StyledUploadImage = styled.div`
  width: 100%;
  height: 300px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  width: 100%;
  height: 25px;
  font-size: 20px;
`;

const Images = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: wrap;
    flex-direction: column;
  }
`;

const Image = styled.div`
  width: 24%;
  height: 98%;
  border: 1px solid #dbdbdb;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 98%;
  }
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const UploadImage = () => {
  const liquidInfo = useRecoilValue(liquidInfoState);

  return (
    <StyledUploadImage>
      <Title>사진첨부(최대 4장)</Title>
      <Images>
        {liquidInfo.images.map((image, index) => (
          <Image key={index}>
            <PreviewImage src={image} />
          </Image>
        ))}
      </Images>
    </StyledUploadImage>
  );
};

export default UploadImage;
