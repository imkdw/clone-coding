import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../recoil/TodoState";

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
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const onLogout = () => {
    setAccessToken("");
    console.log(accessToken);
  };

  return (
    <StyledPageLink>
      {accessToken ? (
        <StyledLink to="/" onClick={onLogout}>
          Logout
        </StyledLink>
      ) : (
        <>
          <StyledLink to="login">Login</StyledLink>
          <StyledLink to="register">Register</StyledLink>
        </>
      )}
    </StyledPageLink>
  );
}

export default PageLink;
