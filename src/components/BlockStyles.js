import React from 'react';
import StyleButton from './StyleButton';

const blockTypes = [
  { label: "OL", style: "ordered-list-item" },
  { label: "UL", style: "unordered-list-item" }, 
  { label: " “ ” ", style: "blockquote" },  
  { label: "{ }", style: 'code-block' }
];

const BlockStyles = props => {

  const Checklist = props.checklist.Button;

  return (
    <div>
      <button class="style-button">        
       <Checklist editorState={props.editorState} />
      </button>
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