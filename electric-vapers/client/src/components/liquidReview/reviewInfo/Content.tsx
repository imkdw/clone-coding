import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { liquidInfoState } from "../../../recoil/recoil";

const StyledContent = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  width: 100%;
  height: 50px;
  font-size: 24px;
  text-align: center;
`;

const TextArea = styled.textarea`
  width: 90%;
  height: 90%;
  resize: none;
  height: 200px;
  border: 1px solid #dbdbdb;
  background-color: transparent;
  padding: 10px;
  font-size: 20px;
  border-radius: 20px;
`;

const Content = () => {
  const liquidInfo = useRecoilValue(liquidInfoState);

  return (
    <StyledContent>
      <Title>솔직한 후기!</Title>
      <TextArea disabled value={liquidInfo.review.content} />
    </StyledContent>
  );
};

export default Content;
