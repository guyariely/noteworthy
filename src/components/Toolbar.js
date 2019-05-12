import React from 'react';
import HeadersDropdown from './HeadersDropdown';
import BlockButtons from './BlockButtons';

const Toolbar = props => {

    const editorState = props.editorState;
    const key = editorState.getSelection().getStartKey();
    const activeBlock = editorState.getCurrentContent().getBlockForKey(key).getType();;

    return (
      <div>
        <div className="toolbar">

          <HeadersDropdown
            activeBlock={activeBlock}
            toggleBlockType={props.toggleBlockType}
          />

          <BlockButtons
            activeBlock={activeBlock}
            toggleBlockType={props.toggleBlockType}
          />

        </div>
      </div>
    );
}

export default Toolbar;
