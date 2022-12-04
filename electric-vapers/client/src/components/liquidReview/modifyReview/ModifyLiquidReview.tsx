import axios from "axios";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { urlConfig } from "../../../config";
import { isLoadingState, liquidInfoState } from "../../../recoil/recoil";
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
  const liquidInfo = useRecoilValue(liquidInfoState);
  const navigator = useNavigate();
  const setIsLoading = useSetRecoilState(isLoadingState);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();

    const res = await axios.put(urlConfig.review.modifyLiquidReview + liquidInfo.review.reviewId, liquidInfo.review);
    if (res.status !== 200) {
      alert("오류가 발생했습니다. 다시 시도해주세요");
      navigator(-1);
      return;
    }

    setIsLoading(false);
    navigator(-1);
  };

  return (
    <StyledWriteLiquidReview onSubmit={submitHandler} acceptCharset="UTF-8">
      <Header isEdit title={liquidInfo.review.division === "mtl" ? "입호흡" : "폐호흡"} />
      <ChooseType />
      <LiquidName />
      <LiquidInfo
        volume={liquidInfo.review.division === "mtl" ? [30, 60, 100, 120] : [60, 100, 120]}
        nicoVolume={liquidInfo.review.division === "mtl" ? [6, 9] : [3, 6]}
      />
      <UploadImage />
      <FreeWrite />
      <LiquidScore />
      <Buttons />
    </StyledWriteLiquidReview>
  );
};

export default ModifyLiquidReview;
