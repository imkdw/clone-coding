import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <StyledLink>
      <LinkText to="#">로그인</LinkText>
      <LinkText to="#">회원가입</LinkText>
    </StyledLink>
  );
};

export default Links;
