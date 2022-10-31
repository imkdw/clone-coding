import styled from "styled-components";
import { ChangeEvent, FocusEvent, useState } from "react";

import spinner from "../../../assets/spinner.svg";
import background from "../../../assets/background.png";

const StyledSearchBar = styled.div`
  width: 268px;
  height: 36px;
  border-radius: 8px;
  position: relative;
  background-color: #efefef;
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const IconBox = styled.div`
  width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  margin-left: 10px;
`;

const IconText = styled.div`
  font-size: 16px;
  color: #8e8e8e;
  margin-left: 10px;
`;

interface InputProps {
  width?: string;
  paddingLeft?: string;
}

const Input = styled.input<InputProps>`
  width: ${(props) => props.width || "100%"};
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  background-color: transparent;
  padding-left: ${(props) => props.paddingLeft || "0px"};

  &:focus {
    outline: none;
  }
`;

const GlassIcon = () => {
  return (
    <svg
      aria-label="검색"
      color="#8e8e8e"
      fill="#8e8e8e"
      height="16"
      role="img"
      viewBox="0 0 24 24"
      width="16"
    >
      <path
        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      ></path>
      <line
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        x1="16.511"
        x2="22"
        y1="16.511"
        y2="22"
      ></line>
    </svg>
  );
};

const RemoveButton = styled.button<{ backgroundImage: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-image: url(${(props) => props.backgroundImage});
  background-position: -318px -333px;
  background-repeat: no-repeat;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
`;

const Spinner = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
`;

const SearchResult = styled.ul`
  width: 380px;
  height: 360px;
  background-color: black;
  border-radius: 6px;
  position: absolute;
  top: 130%;
  left: -25%;
`;

const SearchBar = () => {
  const [isInputFocus, setIsInputFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const focusHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsInputFocus(true);
    setShowResult(true);
  };

  const blurHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsInputFocus(false);
    event.target.value = "";
    setIsLoading(false);
    setShowResult(false);
  };

  const searchUserHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setIsLoading(true);
    setShowResult(true);
  };

  return (
    <StyledSearchBar>
      {!isInputFocus ? (
        <>
          <Input type="text" onFocus={focusHandler} />
          <IconBox>
            <GlassIcon />
            <IconText>검색</IconText>
          </IconBox>
        </>
      ) : (
        <>
          <Input
            type="text"
            placeholder="검색"
            width="calc(100%-15px)"
            paddingLeft="15px"
            onBlur={blurHandler}
            onChange={searchUserHandler}
          />
          {isLoading ? <Spinner src={spinner} /> : <RemoveButton backgroundImage={background} />}
          {showResult && <SearchResult />}
        </>
      )}
    </StyledSearchBar>
  );
};
/**
 * 검색결과 : 380 / 362
 */

export default SearchBar;
