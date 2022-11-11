import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../recoil/recoil";

const StyledLink = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkText = styled(Link)`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30%;

  &:first-child {
    border-right: 1px solid #262626;
  }
`;

const Links = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const navigator = useNavigate();

  const onLogout = () => {
    setAccessToken("");
    localStorage.removeItem("accessToken");
    navigator("/");
  };

  return (
    <StyledLink>
      {accessToken ? (
        <>
          <LinkText to="/login">내 정보</LinkText>
          <LinkText to="" onClick={onLogout}>
            로그아웃
          </LinkText>
        </>
      ) : (
        <>
          <LinkText to="/login">로그인</LinkText>
          <LinkText to="/register">회원가입</LinkText>
        </>
      )}
    </StyledLink>
  );
};

export default Links;
