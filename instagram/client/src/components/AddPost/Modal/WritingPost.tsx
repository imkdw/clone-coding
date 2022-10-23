import { useRecoilState } from "recoil";
import styled from "styled-components";
import { loggedInUserState } from "../../../recoil/recoil";
import storyProfile from "../../../assets/story_profile.png";
import { ChangeEvent, FormEvent } from "react";

const StyledWritingPost = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-direction: column;
`;

const AuthorProfile = styled.div`
  width: 60%;
  height: 15%;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 20px;
`;

const AuthorProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const AuthorName = styled.div`
  font-size: 18px;
  color: #262626;
  font-weight: bold;
`;

const PostForm = styled.div``;
const PostTextarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  padding: 0 20px;
  font-size: 14px;
  overflow: hidden;
`;

const WritingPost = () => {
  const autoResizeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.currentTarget;

    textarea.style.height = "auto";
    let height = textarea.scrollHeight;
    textarea.style.height = `${height + 8}px`;
  };

  const [loggedInUser, setLoggedInUser] = useRecoilState(loggedInUserState);
  return (
    <StyledWritingPost>
      <AuthorProfile>
        <AuthorProfileImage src={storyProfile} />
        <AuthorName>{loggedInUser.nickname}</AuthorName>
      </AuthorProfile>
      <PostForm>
        <PostTextarea placeholder="문구 입력..." onChange={autoResizeHandler} maxLength={600} />
      </PostForm>
    </StyledWritingPost>
  );
};

export default WritingPost;
