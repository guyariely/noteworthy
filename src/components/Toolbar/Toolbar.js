import React from "react";
import HeadersDropdown from "../HeadersDropdown/HeadersDropdown";
import BlockStyles from "../BlockStyles/BlockStyles";
import InlineStyles from "../InlineStyles/InlineStyles";
import { converter } from "../../utils/utils";
import "./Toolbar.scss";

const Toolbar = props => {
  const { editorState, toggleBlockType, toggleInlineStyle } = props;

  const activeBlock = converter.toActiveBlockType(editorState);
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
