import styled from "styled-components";
import React from "react";

interface IStyledBoxProps {
  height: string;
}

const StyledBox = styled.div<IStyledBoxProps>`
  background-color: white;
  width: 350px;
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

// width: 100%;
// height: 390px;
// border: 1px solid #dbdbdb;
// background-color: white;
// display: flex;
// flex-direction: column;
// align-items: center;

interface IBoxProps {
  children: React.ReactNode;
  height: string;
}

const Box = ({ children, height }: IBoxProps) => {
  return <StyledBox height={height}>{children}</StyledBox>;
};

export default Box;
