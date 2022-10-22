import styled from "styled-components";
import ModalUpload from "./ModalUpload";

const StyledPostModal = styled.div`
  width: 60%;
  height: 70%;
  background-color: white;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 80%;
    height: 45%;
  }
`;

const ModalTitle = styled.h1`
  width: 100%;
  height: 8%;
  font-size: 16px;
  color: #262626;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 12%;
    font-size: 15px;
  }
`;

const PostModal = () => {
  return (
    <StyledPostModal>
      <ModalTitle>새 게시물 만들기</ModalTitle>
      <ModalUpload />
    </StyledPostModal>
  );
};

export default PostModal;
