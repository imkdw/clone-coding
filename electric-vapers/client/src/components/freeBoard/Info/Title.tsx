import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { freeBoardDataState } from "../../../recoil/recoil";

const StyledTitle = styled.div`
  width: 100%;
  height: 200px;
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  border-bottom: 2px solid #dbdbdb;
`;

const BoardTitle = styled.div`
  width: 100%;
  height: 50px;
  font-size: 36px;
`;

const AuthorAndDate = styled.div`
  width: 100%;
  height: 50px;
  color: #828282;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AuthorOrDate = styled.div`
  width: 100%;
  height: 25px;
`;

const Title = () => {
  const freeBoardData = useRecoilValue(freeBoardDataState);
  return (
    <StyledTitle>
      <BoardTitle>{freeBoardData.title}</BoardTitle>
      <AuthorAndDate>
        <AuthorOrDate>작성자 : {freeBoardData.nickname}</AuthorOrDate>
        <AuthorOrDate>작성일 : {freeBoardData.createdAt}</AuthorOrDate>
      </AuthorAndDate>
    </StyledTitle>
  );
};

export default Title;
