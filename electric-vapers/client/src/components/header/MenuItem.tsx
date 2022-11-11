import { ReactNode, useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const StyledMenuItem = styled.li`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  position: relative;
`;

interface MenuItemProps {
  children: ReactNode;
}

const MenuItem = ({ children }: MenuItemProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const mouseEnterHandler = () => {
    setShowDropdown(true);
  };

  const mouseLeaveHandler = () => {
    setShowDropdown(false);
  };

  return (
    <StyledMenuItem onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      {children}
      {showDropdown && <Dropdown title={children?.toString()} />}
    </StyledMenuItem>
  );
};

export default MenuItem;
