import styled from "styled-components";

const StyeldWriteComment = styled.form`
  width: 90%;
  height: 120px;
  border: 1px solid #828282;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  gap: 10px;
  margin-top: 40px;
`;

const NicknameWrapper = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
`;

const Nickname = styled.div`
  margin-left: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Input = styled.input`
  width: 85%;
  height: 100%;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 65%;
  }
`;

const SubmitButton = styled.button`
  width: 8%;
  height: 50%;
  color: #0095f6;
  border-radius: 20px;
  border: 1px solid #dbdbdb;

  @media screen and (max-width: 768px) {
    width: 30%;
  }
`;

const WriteComment = () => {
  return (
    <StyeldWriteComment>
      <NicknameWrapper>
        <Nickname>초보군붕이</Nickname>
      </NicknameWrapper>
      <InputWrapper>
        <Input type="text" placeholder="댓글을 입력하세요.." />
        <SubmitButton>댓글입력</SubmitButton>
      </InputWrapper>
    </StyeldWriteComment>
  );
};

export default WriteComment;
