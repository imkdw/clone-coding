import styled from "styled-components";
import PostModal from "./Modal/PostModal";
import { useRecoilState } from "recoil";
import {
  blobImagesState,
  isWritingContentState,
  modalEnableState,
  postContentState,
  uploadFilesState,
} from "../../recoil/recoil";
import { useRouteError } from "react-router-dom";
import { isImageUploadedState } from "./../../recoil/recoil";
import { FormEvent } from "react";
import axios from "axios";
import config from "../../config/config";

const StyledAddPost = styled.form`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const CloseButton = () => {
  return (
    <svg
      aria-label="닫기"
      color="#ffffff"
      fill="#ffffff"
      height="18"
      role="img"
      viewBox="0 0 24 24"
      width="18"
    >
      <title>닫기</title>
      <polyline
        fill="none"
        points="20.643 3.357 12 12 3.353 20.647"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      ></polyline>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        x1="20.649"
        x2="3.354"
        y1="20.649"
        y2="3.354"
      ></line>
    </svg>
  );
};

const PostCloseButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
`;

const AddPost = () => {
  const [isModalEnable, setIsModalEnable] = useRecoilState(modalEnableState);
  const [isImageUploaded, setIsImageUploaded] = useRecoilState(isImageUploadedState);
  const [isWritingContent, setIsWritingContent] = useRecoilState(isWritingContentState);
  const [uploadFiles, setUploadFiles] = useRecoilState(uploadFilesState);
  const [postContent, setPostContent] = useRecoilState(postContentState);

  const closeModalHandler = () => {
    setIsModalEnable(false);
    document.body.style.overflowY = "scroll";
    setIsImageUploaded(false);
    setIsWritingContent(false);
    setUploadFiles([]);
  };

  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    console.log(uploadFiles);

    for (let i = 0; i < uploadFiles.length; i++) {
      formData.append("file", uploadFiles[i]);
    }

    // formData.append("content", postContent);

    const res = await axios.post("http://localhost:5000/post/add-post", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(res);
  };

  return (
    <StyledAddPost
      onSubmit={submitHandler}
      encType="multipart/form-data"
      action="http://localhost:5000/post/add-post"
    >
      <PostModal />
      <PostCloseButton onClick={closeModalHandler}>
        <CloseButton />
      </PostCloseButton>
    </StyledAddPost>
  );
};

export default AddPost;
