import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledPageLink = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const StyledLink = styled(Link)`
  list-style: none;
  font-size: 30px;
  font-family: "Staatliches", cursive;
  color: black;
`;

function PageLink() {
  return (
    <StyledPageLink>
      <StyledLink to="login">Login</StyledLink>
      <StyledLink to="register">Register</StyledLink>
    </StyledPageLink>
  );
}

export default PageLink;
