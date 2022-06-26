import styled from "styled-components";
import AuthInput from "../common/AuthInput";
import Label from "../common/Label";

const StyledForm = styled.form`
  width: 800px;
  height: 100%;
  background-color: aliceblue;
`;

const StyleInputWrapper = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

function RegisterForm() {
  const textData = [
    { type: "text", placeholder: "ID", id: "userId" },
    { type: "password", placeholder: "Password", id: "password" },
    { type: "password", placeholder: "Re-Password", id: "rePassword" },
    { type: "text", placeholder: "Nickname", id: "nickname" },
    { type: "text", placeholder: "Email", id: "email" },
  ];
  return (
    <StyledForm>
      {textData.map(({ type, placeholder, id }) => (
        <StyleInputWrapper key={id}>
          <Label label={placeholder} htmlFor={id} />
          <AuthInput type={type} placeholder={placeholder} id={id} />
        </StyleInputWrapper>
      ))}
    </StyledForm>
  );
}

export default RegisterForm;
