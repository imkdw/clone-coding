import styled from "styled-components";

const StyledHeader = styled.h1`
  height: 200px;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 30px;
    height: 150px;
  }
`;

const Header = () => {
  return <StyledHeader>회원가입</StyledHeader>;
};

export default Header;
