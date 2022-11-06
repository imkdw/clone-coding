import styled from "styled-components";
import MenuItem from "./MenuItem";

const StyledMenu = styled.ul`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Menu = () => {
  return (
    <>
      <StyledMenu>
        <MenuItem>입호흡(MTL)</MenuItem>
        <MenuItem>폐호흡(DTL)</MenuItem>
        <MenuItem>커뮤니티</MenuItem>
        <MenuItem>중고장터</MenuItem>
        <MenuItem>공지사항</MenuItem>
        <MenuItem>건의사항</MenuItem>
      </StyledMenu>
    </>
  );
};

export default Menu;
