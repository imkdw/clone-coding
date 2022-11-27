import styled from "styled-components";

import loading from "../../assets/image/loading.svg";

const StyledLoading = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;

const Loading = () => {
  return (
    <StyledLoading>
      <Image src={loading} />
    </StyledLoading>
  );
};

export default Loading;
