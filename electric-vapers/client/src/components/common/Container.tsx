import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../header/Header";

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <StyledContainer>
      <Header />
      <Content>{children}</Content>
    </StyledContainer>
  );
};

export default Container;
