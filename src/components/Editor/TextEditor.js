import React from "react";
import {
  Editor,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from "draft-js";
import Toolbar from "./Toolbar";
import QuickAccess from "./QuickAccess";
import { styleMap } from "./InlineStyles";

// TODO: give descriptive names, for example keyCodes["H"]
function myKeyBindingFn(e) {
  if (KeyBindingUtil.hasCommandModifier(e)) {
    switch (e.keyCode) {
      case 72 /* H */:
        return "HIGHLIGHT";
      case 89 /* Y */:
        return "CODE";
      case 83 /* S */:
        return "STRIKETHROUGH";
      default:
        break;
    }
  } else if (e.nativeEvent.altKey) {
    switch (e.keyCode) {
      case 84:
        return "header-one";
      case 72:
        return "header-two";
      default:
        break;
    }
  }
  return getDefaultKeyBinding(e);
}

function TextEditor(props) {
  const {
    editorState,
    sidebarIsCollapsed,
    collapseSidebar,
    toggleThemesModal,
    toggleBlockType,
    toggleInlineStyle,
    onChangeEditorState,
    addNote,
    deleteNote,
    editorRef,
  } = props;

  function handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      onChangeEditorState(newState);
      return "handled";
    } else if (["HIGHLIGHT", "CODE", "STRIKETHROUGH"].includes(command)) {
      toggleInlineStyle(command);
      return "handled";
    } else if (["header-one", "header-two"].includes(command)) {
      toggleBlockType(command);
      return "handled";
    }
    return "not-handled";
  }

  return (
    <div id="editor-container">
      <Toolbar
        editorState={editorState}
        toggleBlockType={toggleBlockType}
        toggleInlineStyle={toggleInlineStyle}
      />
      <main className="editor">
        <Editor
          ref={editorRef}
          editorState={editorState}
          customStyleMap={styleMap}
          handleKeyCommand={cmd => handleKeyCommand(cmd)}
          keyBindingFn={myKeyBindingFn}
          onChange={onChangeEditorState}
        />
      </main>
      <QuickAccess
        collapseSidebar={collapseSidebar}
        isCollapsed={sidebarIsCollapsed}
        toggleThemesModal={toggleThemesModal}
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default TextEditor;
