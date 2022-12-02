import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";

const StyledEditor = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 20px;
  height: 40px;
`;

const Editor = () => {
  return (
    <StyledEditor>
      <Label>내용</Label>
      <CKEditor
        editor={ClassicEditor}
        data="<p></p>"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </StyledEditor>
  );
};

export default Editor;
