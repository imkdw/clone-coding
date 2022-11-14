import axios from "axios";
import { FormEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { postUrlConfig } from "../../config";
import { mtlLiquidDataState, uploadImageState } from "../../recoil/recoil";
import Header from "./Header";
import Buttons from "./writeReview/Buttons";
import ChooseType from "./writeReview/ChooseType";
import FreeWrite from "./writeReview/FreeWrite";
import LiquidInfo from "./writeReview/LiquidInfo";
import LiquidName from "./writeReview/LiquidName";
import LiquidScore from "./writeReview/LiquidScore";
import UploadImage from "./writeReview/UploadImage";

const StyledWriteLiquidReview = styled.form`
  width: 70%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const WriteLiquidReview = () => {
  const [mtlLiquidData, setMtlLiquidData] = useRecoilState(mtlLiquidDataState);
  const [uploadImages, setUploadImages] = useRecoilState(uploadImageState);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("postData", JSON.stringify(mtlLiquidData));
    for (let i = 0; i < uploadImages.length; i++) {
      formData.append("file", uploadImages[i]);
    }

    const res = await axios.post(postUrlConfig.writeMtlLiquidReview, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res);
  };

  return (
    <StyledWriteLiquidReview encType="multipart/form-data" onSubmit={submitHandler}>
      <Header isEdit={true} />
      <ChooseType />
      <LiquidName />
      <LiquidInfo />
      <UploadImage />
      <FreeWrite />
      <LiquidScore />
      <Buttons />
    </StyledWriteLiquidReview>
  );
};

export default WriteLiquidReview;
