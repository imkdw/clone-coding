import styled from "styled-components";
import { useRef, useState, useEffect } from "react";

const StyledImagePreview = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 0 0 8px 8px;
  display: flex;
  overflow: hidden;
`;

const ImagePreviewBox = styled.ul<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  position: absolute;
  display: flex;
  transition: all 0.3s;

  @media screen and (max-width: 768px) {
  }
`;

const ImageWrapper = styled.li<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    width: ${(props) => props.width};
  }
`;

const PreviewImage = styled.img<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  border-radius: 0 0 8px 8px;
  @media screen and (max-width: 768px) {
    width: ${(props) => props.width};
  }
`;

interface SliderBtnProps {
  left?: string;
  right?: string;
}

const SliderBtn = styled.button<SliderBtnProps>`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #151515;
  border-radius: 50%;
  z-index: 100;
`;
const PrevBtnImage = () => {
  return (
    <svg
      aria-label="왼쪽 방향 아이콘"
      color="#ffffff"
      fill="#ffffff"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <polyline
        fill="none"
        points="16.502 3 7.498 12 16.502 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
    </svg>
  );
};

const NextBtnImage = () => {
  return (
    <svg
      aria-label="오른쪽 방향 아이콘"
      color="#ffffff"
      fill="#ffffff"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <polyline
        fill="none"
        points="8 3 17.004 12 8 21"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></polyline>
    </svg>
  );
};

interface ImagePreviewProps {
  blobImages: Blob[];
}

const ImagePreview = ({ blobImages }: ImagePreviewProps) => {
  /** 업로드된 이미지 갯수 */
  const imageLength = blobImages.length;

  /** Ref */
  const imagePreviewRef = useRef<HTMLDivElement | null>(null);
  const imagePreviewBoxRef = useRef<HTMLUListElement | null>(null);

  /** StyledImagePreview 가로길이 */
  const imagePreviewWidth = imagePreviewRef.current?.offsetWidth;

  /** ImagePreviewBox 가로길이 */
  const ImagePreviewBoxWidth = Number(imagePreviewWidth) * imageLength;

  /** imagePreviewBox의 Style을 상태로 관리 */
  const [previewBoxStyle, setPreviewBoxStyle] = useState<CSSStyleDeclaration>();

  /** left의 최대값 */
  const maxLeft = Number(imagePreviewWidth) * -(imageLength - 1);

  /** imagePreviewBox의 Style을 상태에 추가 */
  useEffect(() => {
    if (imagePreviewBoxRef.current) {
      setPreviewBoxStyle(imagePreviewBoxRef.current.style);
    }
  }, [imagePreviewBoxRef]);

  /** 초기 슬라이더 좌표 */
  const [left, setLeft] = useState(0);

  const prevHandler = () => {
    if (previewBoxStyle) {
      previewBoxStyle.left = `${left + Number(imagePreviewWidth)}px`;
      setLeft((left) => left + Number(imagePreviewWidth));
    }
  };

  const nextHandler = () => {
    if (previewBoxStyle) {
      previewBoxStyle.left = `${left - Number(imagePreviewWidth)}px`;
      setLeft((left) => left - Number(imagePreviewWidth));
    }
  };

  return (
    <StyledImagePreview ref={imagePreviewRef}>
      <ImagePreviewBox width={ImagePreviewBoxWidth + "px"} ref={imagePreviewBoxRef}>
        {blobImages.map((image, index) => (
          <ImageWrapper key={index} width={imagePreviewWidth + "px"}>
            {left !== 0 && (
              <SliderBtn left="10px" onClick={prevHandler}>
                <PrevBtnImage />
              </SliderBtn>
            )}

            <PreviewImage src={String(image)} width={imagePreviewWidth + "px"} />

            {maxLeft !== left && (
              <SliderBtn right="10px" onClick={nextHandler}>
                <NextBtnImage />
              </SliderBtn>
            )}
          </ImageWrapper>
        ))}
      </ImagePreviewBox>
    </StyledImagePreview>
  );
};

export default ImagePreview;
