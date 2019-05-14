import React from 'react';
import StyleButton from './StyleButton';

const inlineTypes = [
  { label: "U", style: "UNDERLINE"},
  { label: "I", style: "ITALIC" },
  { label: "B", style: "BOLD" },
  { label: "</>", style: "CODE" },
  { label: "H", style: "HIGHLIGHT"}
];
  
const InlineStyles = props => {

  return (
    <div>
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