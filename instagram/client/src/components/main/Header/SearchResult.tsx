import { Link } from "react-router-dom";
import styled from "styled-components";
import { SearchUserResult } from "../../../types/user";

const StyledSearchResult = styled.div`
  width: 380px;
  height: 360px;
  border-radius: 6px;
  position: absolute;
  top: 60px;
  left: 45%;
  transform: translateX(-50%);
  overflow-y: scroll;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  z-index: 999;
`;

const ResultItem = styled(Link)`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
`;

const ProfileImage = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
`;

const UserInfo = styled.div`
  width: 270px;
  height: 44px;
  display: flex;
  flex-direction: column;
`;

const Nickname = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Introduce = styled.div`
  font-size: 14px;
  color: #8e8e8e;
`;

const NoResult = styled.div`
  font-size: 14px;
  color: #8e8e8e;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SearchResult = ({ result }: { result: SearchUserResult[] | never[] }) => {
  return (
    <StyledSearchResult>
      {result && (
        <>
          {result.map((user) => (
            <ResultItem key={user.nickname} to="#">
              <ProfileImage src={user.profile} />
              <UserInfo>
                <Nickname>{user.nickname}</Nickname>
                <Introduce>{user.introduce}</Introduce>
              </UserInfo>
            </ResultItem>
          ))}
        </>
      )}
      {result.length === 0 && <NoResult>검색 결과가 없습니다.</NoResult>}
    </StyledSearchResult>
  );
};
export default SearchResult;
