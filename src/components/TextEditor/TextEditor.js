import React from "react";
import { Editor, RichUtils } from "draft-js";
import Toolbar from "../Toolbar/Toolbar";
import QuickAccess from "../QuickAccess/QuickAccess";
import { styleMap } from "../InlineStyles/InlineStyles";
import { keyBindingFn } from "../../utils/utils";
import "./TextEditor.scss";

function TextEditor(props) {
  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(props.editorState, command);

    if (newState) {
      props.onChangeEditorState(newState);
      return "handled";
    } else if (["HIGHLIGHT", "CODE", "STRIKETHROUGH"].includes(command)) {
      props.toggleInlineStyle(command);
      return "handled";
    } else if (["header-one", "header-two"].includes(command)) {
      props.toggleBlockType(command);
      return "handled";
    }
    return "not-handled";
  }

  return (
    <div id="editor-container">
      <Toolbar
        editorState={props.editorState}
        toggleBlockType={props.toggleBlockType}
        toggleInlineStyle={props.toggleInlineStyle}
      />
      <main className="editor">
        <Editor
          editorState={props.editorState}
          customStyleMap={styleMap}
          handleKeyCommand={cmd => handleKeyCommand(cmd)}
          keyBindingFn={keyBindingFn}
          onChange={props.onChangeEditorState}
          readOnly={props.disable}
        />
      </main>
      <QuickAccess
        collapseSidebar={props.collapseSidebar}
        isCollapsed={props.sidebarIsCollapsed}
        toggleThemesModal={props.toggleThemesModal}
        addNote={props.addNote}
        deleteNote={props.deleteNote}
      />
    </div>
  );
}

export default TextEditor;
