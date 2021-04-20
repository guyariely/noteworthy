import React from "react";
import HeadersDropdown from "./HeadersDropdown";
import BlockStyles from "./BlockStyles";
import InlineStyles from "./InlineStyles";

const Toolbar = props => {
  const { editorState, toggleBlockType, toggleInlineStyle } = props;

  const key = editorState.getSelection().getStartKey();
  const activeBlock = editorState
    .getCurrentContent()
    .getBlockForKey(key)
    .getType();
  const activeStyle = editorState.getCurrentInlineStyle();

  return (
    <div id="toolbar">
      <HeadersDropdown
        activeBlock={activeBlock}
        toggleBlockType={toggleBlockType}
      />
      <InlineStyles
        activeStyle={activeStyle}
        toggleInlineStyle={toggleInlineStyle}
        editorState={editorState}
      />
      <BlockStyles
        activeBlock={activeBlock}
        toggleBlockType={toggleBlockType}
        editorState={editorState}
      />
    </div>
  );
};

export default Toolbar;
