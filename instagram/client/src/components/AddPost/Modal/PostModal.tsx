import styled from "styled-components";
import ModalUpload from "./ModalUpload";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { isImageUploadedState, isWritingContentState } from "../../../recoil/recoil";
import WritingPost from "./WritingPost";

const StyledPostModal = styled.div`
  width: 55%;
  height: 70%;
  background-color: white;
  border-radius: 8px;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 70%;
    height: 45%;
  }
`;

const ModalTitle = styled.div`
  width: 100%;
  height: 8%;
  border-bottom: 1px solid #dbdbdb;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 10%;
    font-size: 15px;
  }
`;

const TitleText = styled.div`
  width: 80%;
  height: 100%;
  font-size: 16px;
  color: #262626;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: 70%;
  }
`;

const TempButton = styled.button`
  width: 10%;

  @media screen and (max-width: 768px) {
    width: 15%;
  }
`;

const NextButton = styled.button`
  width: 10%;
  height: 100%;
  font-size: 14px;
  color: #0095f6;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 15%;
  }
`;

const UploadButton = styled.button`
  width: 10%;
  height: 100%;
  font-size: 14px;
  color: #0095f6;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 15%;
  }
`;

const PostModal = () => {
  const [isImageUploaded, setIsImageUploaded] = useRecoilState(isImageUploadedState);
  const [isWritingContent, setIsWritingContent] = useRecoilState(isWritingContentState);

  const writingContentHandler = () => {
    setIsWritingContent(true);
    setIsImageUploaded(false);
  };

  return (
    <StyledPostModal>
      <ModalTitle>
        {isImageUploaded ? (
          <>
            <TempButton />
            <TitleText>이미지 확인</TitleText>
            <NextButton onClick={writingContentHandler}>다음</NextButton>
          </>
        ) : (
          <>
            <TempButton />
            <TitleText>새 게시물 만들기</TitleText>
            {isWritingContent && <UploadButton type="submit">업로드</UploadButton>}
          </>
        )}
      </ModalTitle>
      {!isWritingContent && <ModalUpload />}
      {isWritingContent && <WritingPost />}
    </StyledPostModal>
  );
};

export default PostModal;
