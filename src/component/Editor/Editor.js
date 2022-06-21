import React from "react";
import styles from "./Editor.module.css";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
const Editor = () => {
  const [myInput, setMyInput] = React.useState("");

  console.log(myInput);

  return (
    <div>
      Editor
      <SunEditor
        // setContents="My contents"
        showToolbar={true}
        // onChange={handleEditorChange}
        setDefaultStyle="height: auto"
        setContents="<h1>here You Can add Content That you want to render as a default</h1>"
        onChange={(e) => setMyInput(e)}
        setOptions={{
          buttonList: [
            ["undo", "redo"],
            ["font", "fontSize", "formatBlock"],
            ["paragraphStyle", "blockquote"],
            [
              "bold",
              "underline",
              "italic",
              "strike",
              "subscript",
              "superscript",
            ],
            ["fontColor", "hiliteColor", "textStyle"],
            ["removeFormat"],
            ["outdent", "indent"],
            ["align", "horizontalRule", "list", "lineHeight"],
            ["table", "link", "image", "video", "audio"],
            ["fullScreen", "showBlocks", "codeView"],
            ["preview", "print"],
            ["save", "template"],
          ],
        }}
      />
    </div>
  );
};

export default Editor;
