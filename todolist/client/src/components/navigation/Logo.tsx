import styled from "styled-components";

const StyledLogo = styled.div`
  font-size: 40px;
  font-weight: bold;
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Staatliches", cursive;
  letter-spacing: 5px;
  color: #b6abab;
  text-shadow: 0.1em 0.1em rgba(36, 43, 46, 0.5);
`;

function Logo() {
  return <StyledLogo>TodoList</StyledLogo>;
}

export default Logo;
