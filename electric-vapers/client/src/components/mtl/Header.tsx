import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.div<{ isEdit: boolean }>`
  width: 100%;
  height: 150px;
  min-height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    height: ${(props) => (props.isEdit ? "75px" : "150px")};
    min-height: ${(props) => (props.isEdit ? "75px" : "150px")};
    flex-direction: column;
  }
`;

const HeaderText = styled.div<{ height: string }>`
  width: 50%;
  height: 100%;
  font-size: 40px;
  color: #0095f6;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: ${(props) => props.height};
    align-items: flex-end;
    font-size: 30px;
    justify-content: center;
  }
`;

const HeaderUtils = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SearchBar = styled.div`
  width: 70%;
  height: 50%;
  border-radius: 20px;
  border: 1px solid #dbdbdb;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

const IconBox = styled.div`
  width: 10%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 85%;
  height: 100%;
  border-radius: 0 10px 10px 0;
  background-color: transparent;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const WriteReviewLink = styled(Link)`
  width: 20%;
  height: 50%;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0095f6;
`;

const Glass = () => {
  return (
    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.83333 0.5C4.24083 0.5 0.5 4.24083 0.5 8.83333C0.5 13.4258 4.24083 17.1667 8.83333 17.1667C10.8304 17.1667 12.6645 16.4575 14.1019 15.2803L19.0775 20.2559C19.1543 20.3358 19.2462 20.3997 19.348 20.4437C19.4498 20.4877 19.5593 20.5109 19.6702 20.512C19.781 20.5132 19.891 20.4922 19.9937 20.4502C20.0963 20.4083 20.1896 20.3464 20.268 20.268C20.3464 20.1896 20.4083 20.0963 20.4502 19.9937C20.4922 19.891 20.5132 19.781 20.512 19.6702C20.5109 19.5593 20.4877 19.4498 20.4437 19.348C20.3997 19.2462 20.3358 19.1543 20.2559 19.0775L15.2803 14.1019C16.4575 12.6645 17.1667 10.8304 17.1667 8.83333C17.1667 4.24083 13.4258 0.5 8.83333 0.5ZM8.83333 2.16667C12.5251 2.16667 15.5 5.14156 15.5 8.83333C15.5 12.5251 12.5251 15.5 8.83333 15.5C5.14156 15.5 2.16667 12.5251 2.16667 8.83333C2.16667 5.14156 5.14156 2.16667 8.83333 2.16667Z"
        fill="#828282"
      />
    </svg>
  );
};

interface HeaderProps {
  isEdit: boolean;
}

const Header = ({ isEdit }: HeaderProps) => {
  return (
    <StyledHeader isEdit={isEdit}>
      {isEdit ? (
        <HeaderText height="100%">입호흡 - 액상 리뷰 작성</HeaderText>
      ) : (
        <HeaderText height="50%">입호흡 - 액상 리뷰</HeaderText>
      )}

      {!isEdit && (
        <HeaderUtils>
          <SearchBar>
            <IconBox>
              <Glass />
            </IconBox>
            <Input type="text" placeholder="액상 검색" />
          </SearchBar>
          <WriteReviewLink to="/mtl-liquid/write">리뷰작성</WriteReviewLink>
        </HeaderUtils>
      )}
    </StyledHeader>
  );
};

export default Header;
