import styled from "styled-components";

const StyledFooter = styled.div`
  width: 100%;
  height: 100px;
  background-color: #ececec;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const TextBox = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const Text = styled.p`
  font-size: 14px;
  color: #828282;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <TextBox>
        <Text>Repulic of Korea, Electric Vapers</Text>
        <Text>전자담배를 사용하는 유저들의 모임, 전담유저들(Electric Vapers)</Text>
        <Text>Contact : imkdw@kakao.com</Text>
      </TextBox>
    </StyledFooter>
  );
};

export default Footer;
