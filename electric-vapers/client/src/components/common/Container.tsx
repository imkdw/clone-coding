import { ReactNode } from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const StyledContainer = styled.div`
  width: 100%;
  height: auto;
`;

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <StyledContainer>
      <Header />
      {children}
      <Footer />
    </StyledContainer>
  );
};

export default Container;
