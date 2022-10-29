import styled from "styled-components";

const StyledPostImage = styled.img`
  width: 100%;
  height: 587px;

  @media screen and (max-width: 768px) {
    height: 540px;
  }
`;

const PostImage = ({ images }: { images: string[] }) => {
  return <StyledPostImage src={images[0]} />;
};

export default PostImage;
