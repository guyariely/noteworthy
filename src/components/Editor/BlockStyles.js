import React from 'react';
import StyleButton from './StyleButton';

const blockTypes = [
  { label: "faListOl", style: "ordered-list-item" },
  { label: "faListUl", style: "unordered-list-item" }, 
  { label: "faQuoteRight", style: "blockquote" },  
  { label: "faFileCode", style: 'code-block' }
];

const BlockStyles = props => {

  return (
    <div className="block-styles">
      {
        blockTypes.map(blockType => {
          return (
            <StyleButton 
              active={blockType.style === props.activeBlock}
              style={blockType.style}
              label={blockType.label}
              toggleStyle={props.toggleBlockType}
              key={blockType.label}
            />
          );
        })
      }
    </div>
  );
};

export default BlockStyles;