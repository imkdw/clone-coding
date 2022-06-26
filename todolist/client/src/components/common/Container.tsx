import { ReactNode } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e6f0ef;
  display: flex;
  justify-content: center;
`;

const ContainerWrapper = styled.div`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Container({ children }: { children: ReactNode }) {
  return (
    <StyledContainer>
      <ContainerWrapper>{children}</ContainerWrapper>
    </StyledContainer>
  );
}

export default Container;
