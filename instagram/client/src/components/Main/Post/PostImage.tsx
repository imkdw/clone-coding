import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import background from "../../../assets/background.png";

const StyledPostImage = styled.div`
  width: 100%;
  height: 587px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    height: 540px;
  }
`;

const ImageList = styled.ul<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
  background-color: antiquewhite;
  display: flex;
  position: absolute;
  transition: all 0.3s;
`;

const ImageItem = styled.li`
  width: 100%;
  height: 100%;
`;

const Image = styled.img<{ width: string }>`
  width: ${(props) => props.width};
  height: 100%;
`;

interface ISliderButtonProps {
  left?: string;
  right?: string;
  backgroundImage: string;
  backgroundPosition: string;
}

const SliderButton = styled.button<ISliderButtonProps>`
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 50%;
  transform: translateY(-50%);
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  top: 50%;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: ${(props) => props.backgroundPosition};
  cursor: pointer;
`;

const PostImage = ({ images }: { images: string[] }) => {
  const [pos, setPos] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const postImageRef = useRef<HTMLDivElement | null>(null);
  const imageListRef = useRef<HTMLUListElement | null>(null);
  const imageListWidth = Number(imageWidth) * images.length;

  useEffect(() => {
    if (postImageRef.current) {
      setImageWidth(postImageRef.current.offsetWidth);
    }
  }, [postImageRef]);

  const prevHandler = () => {
    if (imageListRef.current) {
      imageListRef.current.style.left = `${pos + Number(imageWidth)}px`;
      setPos((pos) => pos + Number(imageWidth));
    }
  };

  const nextHandler = () => {
    if (imageListRef.current) {
      imageListRef.current.style.left = `${pos - Number(imageWidth)}px`;
      setPos((pos) => pos - Number(imageWidth));
    }
  };

  return (
    <StyledPostImage ref={postImageRef}>
      <ImageList width={String(imageListWidth) + "px"} ref={imageListRef}>
        {images.map((image) => (
          <ImageItem key={image}>
            <Image src={image} width={String(imageWidth) + "px"} />
          </ImageItem>
        ))}
      </ImageList>
      {/* 이미지가 1개 이상이고, pos가 0이 아닐때 */}
      {images.length > 1 && pos !== 0 && (
        <SliderButton
          left="10px"
          backgroundImage={background}
          backgroundPosition="-130px -98px"
          onClick={prevHandler}
        />
      )}

      {/* 이미지가 1개 이상이고, pos랑 maxPos의 값이 다를때 */}
      {images.length > 1 && pos !== -(imageListWidth - imageWidth) && (
        <SliderButton
          right="10px"
          backgroundImage={background}
          backgroundPosition="-162px -98px;"
          onClick={nextHandler}
        />
      )}
    </StyledPostImage>
  );
};

export default PostImage;
