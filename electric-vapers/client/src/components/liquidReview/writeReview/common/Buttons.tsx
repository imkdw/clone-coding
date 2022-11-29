import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { liquidDataState, uploadImageState } from "../../../../recoil/recoil";

const StyledButtons = styled.div`
  width: 100%;
  height: 80px;
  min-height: 80px;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 150px;
  height: 70%;
  color: #0095f6;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s;

  &:hover {
    background-color: #dbdbdb;
  }
`;

const Buttons = () => {
  const setLiquidData = useSetRecoilState(liquidDataState);
  const setUploadImages = useSetRecoilState(uploadImageState);

  const cancelHandler = () => {
    setLiquidData({
      author: "",
      type: "",
      title: "",
      info: {
        volume: 30,
        nicoVolume: 3,
      },
      introduce: "",
      content: "",
      score: {
        sweet: 0,
        mensol: 0,
        neck: 0,
        fresh: 0,
      },
      division: "",
    });
    setUploadImages([]);
  };

  return (
    <StyledButtons>
      <Button type="submit">작성하기</Button>
      <Button onClick={cancelHandler}>취소하기</Button>
    </StyledButtons>
  );
};

export default Buttons;
