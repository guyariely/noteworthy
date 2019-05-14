import React from 'react';
import StyleButton from './StyleButton';

const blockTypes = [
  { label: " “ ” ", style: "blockquote" },
  { label: "UL", style: "unordered-list-item" },
  { label: "OL", style: "ordered-list-item" },
  { label: "{ }", style: 'code-block' }
];

const BlockStyles = props => {

  const Checklist = props.checklist.Button;

  return (
    <div>
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
      <button>        
       <Checklist editorState={props.editorState} />
      </button>
    </div>
  );
};

export default BlockStyles;