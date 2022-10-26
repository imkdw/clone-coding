import styled from "styled-components";
import { useRef, ChangeEvent, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { blobImagesState, isImageUploadedState, uploadFilesState } from "./../../../recoil/recoil";
import ImagePreview from "./ImagePreview";

const StyledModalUpload = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 90%;
  }
`;

const FileIcon = () => {
  return (
    <svg
      aria-label="이미지나 동영상과 같은 미디어를 나타내는 아이콘"
      color="#262626"
      fill="#262626"
      height="77"
      role="img"
      viewBox="0 0 97.6 77.3"
      width="96"
    >
      <path
        d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z"
        fill="currentColor"
      ></path>
      <path
        d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z"
        fill="currentColor"
      ></path>
      <path
        d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

const UploadHeader = styled.div`
  color: #262626;
  font-size: 22px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const UploadButton = styled.button`
  width: 121px;
  height: 30px;
  color: white;
  font-size: 14px;
  background-color: #0095f6;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ImageUploadInput = styled.input`
  display: none;
`;

const ModalUpload = () => {
  const imageUploadRef = useRef<null | HTMLInputElement>(null);
  const [isImageUploaded, setIsImageUploaded] = useRecoilState(isImageUploadedState);
  const [blobImages, setBlobImages] = useState<Blob[] | never[]>([]);
  const [uploadFiles, setUploadFiles] = useRecoilState(uploadFilesState);
  const [uploadFilesLength, setUploadFilesLength] = useState(0);

  /** useState 동기처리 */
  useEffect(() => {
    if (blobImages.length === uploadFilesLength && blobImages.length !== 0) {
      setIsImageUploaded(true);
    }
  }, [blobImages]);

  /** 버튼 클릭시 input 태그에 click 이벤트 발생 */
  const clickInputHanlder = () => {
    imageUploadRef.current?.click();
  };

  /** input[type="file"]에 파일이 업로드될때 이벤트를 처리 */
  const imageUploadHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    setUploadFilesLength(files.length);

    /** 이미지(파일) 업로드는 최대 10장까지 가능 */
    if ([files].length > 11) {
      alert("이미지는 최대 10장까지 업로드가 가능합니다.");
      return;
    }

    /** 업로드된 파일이 모두 이미지인지 확인하고 blob 형식으로 변환 */
    for (let i = 0; i < files.length; i++) {
      if (!files[i].type.match("image/*")) {
        alert("이미지파일만 업로드가 가능합니다.");
        return;
      }

      /** 업로드된 파일을 formData에 추가하기위해 전역으로 상태관리 */
      setUploadFiles((uploadFiles) => [...uploadFiles, files[i]]);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        setBlobImages((blobImages) => [...blobImages, e.target.result]);
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <StyledModalUpload>
      {isImageUploaded && <ImagePreview blobImages={blobImages} />}
      <FileIcon />
      <UploadHeader>사진과 동영상을 여기에 끌어다 놓으세요</UploadHeader>
      <UploadButton onClick={clickInputHanlder}>컴퓨터에서 선택</UploadButton>
      <ImageUploadInput
        type="file"
        accept="image/*"
        required
        multiple
        ref={imageUploadRef}
        onChange={imageUploadHandler}
        name="images"
      />
    </StyledModalUpload>
  );
};

export default ModalUpload;
