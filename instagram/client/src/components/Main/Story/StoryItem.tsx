import styled from "styled-components";

import storyProfile from "../../../assets/story_profile.png";

const StyledStoryItem = styled.div`
  width: 66px;
  height: 90px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StoryItemWrapper = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 50%;
  background: linear-gradient(40deg, #ffc800, #ff3882, #d300c5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserProfile = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: black;
  border: 3px solid white;
`;

const UserNickname = styled.div`
  font-size: 12px;
  color: #262626;
  display: flex;
  justify-content: center;
`;

const StoryItem = () => {
  return (
    <StyledStoryItem>
      <StoryItemWrapper>
        <UserProfile src={storyProfile} />
      </StoryItemWrapper>
      <UserNickname>gunbune</UserNickname>
    </StyledStoryItem>
  );
};

export default StoryItem;
