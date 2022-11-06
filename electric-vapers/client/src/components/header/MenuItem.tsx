import { ReactNode } from "react";
import styled from "styled-components";

const StyledMenuItem = styled.li`
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
`;

interface MenuItemProps {
  children: ReactNode;
}

const MenuItem = ({ children }: MenuItemProps) => {
  return <StyledMenuItem>{children}</StyledMenuItem>;
};

export default MenuItem;
