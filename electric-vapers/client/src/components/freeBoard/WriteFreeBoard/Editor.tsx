import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { freeBoardState } from "../../../recoil/recoil";

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
  const [freeBoard, setFreeBoard] = useRecoilState(freeBoardState);

  return (
    <StyledEditor>
      <Label>내용</Label>
      <CKEditor
        editor={ClassicEditor}
        data={freeBoard.content}
        onChange={(event, editor) => {
          const data = editor.getData();
          setFreeBoard((prevState) => {
            return { ...prevState, content: data };
          });
        }}
      />
    </StyledEditor>
  );
};

export default Editor;
