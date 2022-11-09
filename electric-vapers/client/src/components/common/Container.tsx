import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;

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
