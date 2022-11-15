import { ChangeEvent, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { uploadImageState } from "../../../recoil/recoil";

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

const ImageIcon = () => {
  return (
    <svg width="101" height="101" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_92_1473)">
        <path
          d="M0.5 8.02625V92.0262H100.5V8.02625H0.5ZM4.5 12.0262H96.5V88.0262H4.5V12.0262ZM8.5 16.0262V61.5887C8.44531 61.8544 8.44531 62.1356 8.5 62.4012V84.0262H92.5V74.3387C92.5547 74.0731 92.5547 73.7919 92.5 73.5262V16.0262H8.5ZM12.5 20.0262H88.5V69.1512L69.9375 50.5887C69.4922 50.1512 68.8672 49.9403 68.25 50.0262C67.8047 50.0731 67.3828 50.2762 67.0625 50.5887L58.5625 59.0887L38 36.6512C37.5391 36.1512 36.8594 35.9091 36.1875 36.0262C35.7891 36.0809 35.4219 36.2606 35.125 36.5262L12.5 57.4012V20.0262ZM70.5 30.0262C67.1875 30.0262 64.5 32.7137 64.5 36.0262C64.5 39.3387 67.1875 42.0262 70.5 42.0262C73.8125 42.0262 76.5 39.3387 76.5 36.0262C76.5 32.7137 73.8125 30.0262 70.5 30.0262ZM36.375 40.9012L55.6875 61.9637L51.0625 66.5887C50.2656 67.3856 50.2656 68.6669 51.0625 69.4637C51.8594 70.2606 53.1406 70.2606 53.9375 69.4637L59.625 63.7137C59.9062 63.5419 60.1406 63.3075 60.3125 63.0262L68.5 54.9012L88.5 74.9012V80.0262H12.5V62.9637L36.375 40.9012Z"
          fill="#DBDBDB"
        />
      </g>
      <defs>
        <clipPath id="clip0_92_1473">
          <rect width="100" height="100" fill="white" transform="translate(0.5 0.0262451)" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Upload = styled.input`
  display: none;
`;

const UploadImage = () => {
  const [uploadImages, setUploadImages] = useRecoilState(uploadImageState);
  const [blobImages, setBlobImages] = useState<Blob[] | never[]>([]);

  const uploadRef = useRef<HTMLInputElement | null>(null);

  const clickInputHandler = () => {
    setUploadImages([]);
    uploadRef.current?.click();
  };

  const imageUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;

    if (files) {
      if (files.length > 4) {
        alert("이미지는 4장까지 업로드가 가능합니다.");
        return;
      }

      for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match("image/*")) {
          alert("이미지 파일만 업로드가 가능합니다.");
          setUploadImages([]);
          return;
        }

        setUploadImages((prevState) => [...prevState, files[i]]);
        const reader = new FileReader();
        reader.onload = (e: any) => {
          setBlobImages((blobImages) => [...blobImages, e.target.result]);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  return (
    <StyledUploadImage>
      <Upload
        ref={uploadRef}
        type="file"
        multiple
        onChange={imageUploadHandler}
        accept="image/*"
        required
        name="file"
      />
      <Title>사진첨부(최대 4장)</Title>
      <Images>
        {uploadImages.length === 0 ? (
          <Image onClick={clickInputHandler}>
            <ImageIcon />
          </Image>
        ) : (
          <>
            {blobImages.map((blob, index) => (
              <Image key={index}>
                <PreviewImage src={String(blob)} />
              </Image>
            ))}
          </>
        )}
      </Images>
    </StyledUploadImage>
  );
};

export default UploadImage;
