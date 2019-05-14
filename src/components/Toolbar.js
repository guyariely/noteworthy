import React from 'react';
import HeadersDropdown from './HeadersDropdown';
import BlockStyles from './BlockStyles';
import InlineStyles from './InlineStyles';

const Toolbar = props => {
    
  const editorState = props.editorState; 
  const key = editorState.getSelection().getStartKey();
  const activeBlock = editorState.getCurrentContent().getBlockForKey(key).getType();
  const activeStyle = editorState.getCurrentInlineStyle();

  return (
    <div>
      <div className="toolbar">

        <HeadersDropdown
          activeBlock={activeBlock}
          toggleBlockType={props.toggleBlockType}
        />

        <BlockStyles
          activeBlock={activeBlock}
          toggleBlockType={props.toggleBlockType}
          checklist={props.checklist}
          editorState={editorState}
        />

        <InlineStyles 
          activeStyle={activeStyle}
          toggleInlineStyle={props.toggleInlineStyle}
          editorState={editorState}
        />

      </div>
    </div>
  );
};

export default Toolbar;
