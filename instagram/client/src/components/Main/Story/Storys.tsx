import styled from "styled-components";
import StoryItem from "./StoryItem";

const StyledStorys = styled.div`
  width: 470px;
  height: 115px;
  background-color: white;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  margin-top: 90px;
  display: flex;
  align-items: center;
`;

const Storys = () => {
  return (
    <StyledStorys>
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </StyledStorys>
  );
};

export default Storys;
