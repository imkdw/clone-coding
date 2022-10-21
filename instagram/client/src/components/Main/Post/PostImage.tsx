import styled from "styled-components";

import girlModel from "../../../assets/girl_model.jpg";

const StyledPostImage = styled.img`
  width: 100%;
  height: 587px;
`;

const PostImage = () => {
  return <StyledPostImage src={girlModel} />;
};

export default PostImage;
