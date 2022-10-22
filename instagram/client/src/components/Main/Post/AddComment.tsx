import styled from "styled-components";
import { FormEvent, useState, ChangeEvent } from "react";

const StyledAddComment = styled.form`
  width: 100%;
  height: 49px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const AddCommentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;

const InsertEmoji = styled.div`
  width: 36px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const CommentTextarea = styled.textarea`
  width: 360px;
  height: 18px;
  resize: none;
  border: none;
  max-height: 80px;
  font-size: 14px;
  color: #262626;
  outline: none;
`;

interface SubmitButtonProps {
  color: string;
}

const SubmitButton = styled.button<SubmitButtonProps>`
  width: 30px;
  color: ${(props) => props.color};
  font-size: 14px;
  margin-left: 20px;
  font-weight: bold;
`;

const Emoji = () => {
  return (
    <svg
      aria-label="이모티콘"
      color="#262626"
      fill="#262626"
      height="24"
      role="img"
      viewBox="0 0 24 24"
      width="24"
    >
      <path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path>
    </svg>
  );
};

const AddComment = () => {
  const [isCommentValid, setIsCommentValid] = useState(false);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;

    if (value.length !== 0 && isCommentValid !== true) {
      setIsCommentValid(true);
    } else if (value.length === 0) {
      setIsCommentValid(false);
    }
  };

  return (
    <StyledAddComment onSubmit={submitHandler}>
      <AddCommentWrapper>
        <InsertEmoji>
          <Emoji />
        </InsertEmoji>
        <CommentTextarea placeholder="댓글 달기..." onChange={changeHandler} />
        {isCommentValid ? (
          <SubmitButton color="#0095F7">게시</SubmitButton>
        ) : (
          <SubmitButton color="#c5e7fd">게시</SubmitButton>
        )}
      </AddCommentWrapper>
    </StyledAddComment>
  );
};

export default AddComment;
