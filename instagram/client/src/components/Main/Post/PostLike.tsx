import styled from "styled-components";

const StyledPostLike = styled.div`
  width: 100%;
  height: 30px;
  font-weight: bold;
  font-size: 14px;
  color: #262626;
`;

const PostLike = () => {
  return <StyledPostLike>좋아요 9,999개</StyledPostLike>;
};

export default PostLike;
