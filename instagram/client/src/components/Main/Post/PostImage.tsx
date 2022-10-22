import styled from "styled-components";

import girlModel from "../../../assets/girl_model.jpg";

const StyledPostImage = styled.img`
  width: 100%;
  height: 587px;

  @media screen and (max-width: 768px) {
    height: 540px;
  }
`;

const PostImage = () => {
  return <StyledPostImage src={girlModel} />;
};

export default PostImage;
