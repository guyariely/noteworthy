import React from 'react';
import StyleButton from './StyleButton';

const inlineTypes = [
  { label: "B", style: "BOLD" },  
  { label: "I", style: "ITALIC" },
  { label: "U", style: "UNDERLINE" },
  { label: "H", style: "HIGHLIGHT" },
  { label: "</>", style: "CODE" }
];
  
const InlineStyles = props => {

  return (
    <div id="toolbar__inline-styles">
    {
      inlineTypes.map(inlineType => {
        return (
          <StyleButton 
            key={inlineType.label}
            label={inlineType.label}
            style={inlineType.style}
            toggleStyle={props.toggleInlineStyle}
            active={props.activeStyle.has(inlineType.style)}
          />
        );
      })
    }
    </div>
  );
};

export default InlineStyles;