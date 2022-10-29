import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loggedInUserState } from "../../../recoil/recoil";

const StyledProfileInfo = styled.div`
  width: 100%;
  height: 240px;
  margin-top: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #dbdbdb;
`;

const ProfileImageBox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
`;

const ProfileTextBox = styled.div`
  width: 65%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`;

const NicknameAndButton = styled.div`
  font-size: 28px;
  color: #262626;
  display: flex;
  gap: 20px;
  border-radius: 6px;
`;

const Nickname = styled.div`
  font-size: 26px;
  color: #262626;
`;

const ProfileChangeButton = styled.button`
  width: 90px;
  height: 30px;
  border: 1px solid #dbdbdb;
  background-color: #fafafa;
  font-weight: bold;
  font-size: 14px;
  border-radius: 4px;
`;

const ProfileCounter = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  gap: 20px;
`;

const CounterItem = styled.div`
  width: 90px;
  height: 100%;
  display: flex;
`;

const ItemSubject = styled.div`
  font-size: 16px;
  color: #262626;
`;

const ItemCount = styled.div`
  font-size: 16px;
  color: #262626;
  font-weight: bold;
  margin-left: 7px;
`;

const NameAndIntroduce = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  width: 100%;
  font-size: 16px;
  color: #262626;
  font-weight: bold;
`;

const Introduce = styled.div`
  width: 100%;
  font-size: 16px;
  color: #262626;
`;

const ProfileInfo = () => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState);

  return (
    <StyledProfileInfo>
      <ProfileImageBox>
        <ProfileImage src={loggedInUser.profile} />
      </ProfileImageBox>
      <ProfileTextBox>
        <NicknameAndButton>
          <Nickname>{loggedInUser.nickname}</Nickname>
          <ProfileChangeButton>프로필 편집</ProfileChangeButton>
        </NicknameAndButton>
        <ProfileCounter>
          <CounterItem>
            <ItemSubject>게시물</ItemSubject>
            <ItemCount>0</ItemCount>
          </CounterItem>
          <CounterItem>
            <ItemSubject>팔로워</ItemSubject>
            <ItemCount>999</ItemCount>
          </CounterItem>
          <CounterItem>
            <ItemSubject>팔로우</ItemSubject>
            <ItemCount>999</ItemCount>
          </CounterItem>
        </ProfileCounter>
        <NameAndIntroduce>
          <Name>{loggedInUser.name}</Name>
          <Introduce>{loggedInUser.introduce}</Introduce>
        </NameAndIntroduce>
      </ProfileTextBox>
    </StyledProfileInfo>
  );
};

export default ProfileInfo;
