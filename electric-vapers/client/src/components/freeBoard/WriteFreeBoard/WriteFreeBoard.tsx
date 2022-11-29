import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { urlConfig } from "../../../config";
import { isLoadingState, liquidDataState, loggedInUserState, uploadImageState } from "../../../recoil/recoil";
import Header from "../Header";

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

const WriteFreeBoard = () => {
  const loggedInUser = useRecoilValue(loggedInUserState);
  const [liquidData, setLiquidData] = useRecoilState(liquidDataState);
  const [uploadImages, setUploadImages] = useRecoilState(uploadImageState);
  const navigator = useNavigate();
  const setIsLoading = useSetRecoilState(isLoadingState);

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    /** 본문 내용 추가 */
    formData.append("reviewData", JSON.stringify(liquidData));

    /** 업로드된 이미지 추가 */
    for (let i = 0; i < uploadImages.length; i++) {
      formData.append("file", uploadImages[i]);
    }

    const res = await axios.post(urlConfig.review.writeLiquidReview, formData, {
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
          volume: 0,
          nicoVolume: 0,
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
      setIsLoading(false);
    }
  };

  return (
    <StyledWriteLiquidReview encType="multipart/form-data" onSubmit={submitHandler} acceptCharset="UTF-8">
      <Header isEdit />
    </StyledWriteLiquidReview>
  );
};

export default WriteFreeBoard;
