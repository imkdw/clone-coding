import axios from "axios";
import { FormEvent, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { urlConfig } from "../../config";
import { liquidDataState, loggedInUserState, uploadImageState } from "../../recoil/recoil";
import Buttons from "./common/Buttons";
import UploadImage from "./common/UploadImage";
import LiquidScore from "./common/LiquidScore";
import Header from "./common/Header";
import ChooseType from "./common/ChooseType";
import LiquidName from "./common/LiquidTItle";
import LiquidInfo from "./common/LiquidInfo";
import FreeWrite from "./common/FreeWrite";
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

const ModifyLiquidReview = () => {
  const loggedInUser = useRecoilValue(loggedInUserState);
  const [liquidData, setLiquidData] = useRecoilState(liquidDataState);
  const [uploadImages, setUploadImages] = useRecoilState(uploadImageState);
  const navigator = useNavigate();

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    /** 본문 내용 추가 */
    formData.append("postData", JSON.stringify(liquidData));

    /** 업로드된 이미지 추가 */
    for (let i = 0; i < uploadImages.length; i++) {
      formData.append("file", uploadImages[i]);
    }

    const res = await axios.post(urlConfig.post.postLiquidReview, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (res.status === 200) {
      setLiquidData({
        ...liquidData,
        author: "",
        type: "",
        title: "",
        info: {
          volume: 30,
          nicoVolume: 3,
        },
        introduce: "",
        content: "",
        score: {
          sweet: 0,
          mensol: 0,
          neck: 0,
          fresh: 0,
        },
      });

      setUploadImages([]);
      navigator("/mtl-liquid");
    }
  };

  return (
    <StyledWriteLiquidReview encType="multipart/form-data" onSubmit={submitHandler} acceptCharset="UTF-8">
      <Header isEdit={true} title={liquidData.division === "mtl" ? "입호흡" : "폐호흡"} />
      <ChooseType />
      <LiquidName />
      <LiquidInfo
        volume={liquidData.division === "mtl" ? [30, 60, 100, 120] : [60, 100, 120]}
        nicoVolume={liquidData.division === "mtl" ? [6, 9] : [3, 6]}
      />
      <UploadImage />
      <FreeWrite />
      <LiquidScore />
      <Buttons />
    </StyledWriteLiquidReview>
  );
};

export default ModifyLiquidReview;
