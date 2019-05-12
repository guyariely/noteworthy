import React from 'react';
import BlockButton from './BlockButton';

const blockTypes = [
  { label: " “ ” ", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "{ }", style: 'code-block' }
];

const BlockButtons = props => {

  return (
    <div>
      {
        blockTypes.map(blockType => {
          return (
            <BlockButton 
              active={blockType.style === props.activeBlock}
              blockType={blockType}
              toggleBlockType={props.toggleBlockType}
              key={blockType.label}
            />
          );
        })
      }
    </div>
  );
};

export default BlockButtons;