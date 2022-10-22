import styled from "styled-components";
import { useEffect } from "react";

const StyledImagePreview = styled.ul`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  border-radius: 0 0 8px 8px;
`;

interface ImagePreviewProps {
  blobImages: Blob[];
}

const ImagePreview = ({ blobImages }: ImagePreviewProps) => {
  console.log(blobImages);
  return <StyledImagePreview></StyledImagePreview>;
};

export default ImagePreview;
