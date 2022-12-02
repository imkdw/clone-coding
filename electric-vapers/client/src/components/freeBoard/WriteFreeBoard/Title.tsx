import styled from "styled-components";

const StyledTitle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  height: 40px;
  font-size: 20px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 98%;
  height: 40px;
  border: none;
`;

const Title = () => {
  return (
    <StyledTitle>
      <Label>제목</Label>
      <InputWrapper>
        <Input type="text" name="title" />
      </InputWrapper>
    </StyledTitle>
  );
};

export default Title;
