import React from 'react';
import StyleButton from './StyleButton';

const inlineTypes = [
  { label: "faBold", style: "BOLD" },  
  { label: "faItalic", style: "ITALIC" },
  { label: "faUnderline", style: "UNDERLINE" },
  { label: "faHighlighter", style: "HIGHLIGHT" },
  { label: "faCode", style: "CODE" }
];

export const styleMap = {
  'CODE': {
    color: 'var(--code-color)',
    fontFamily: 'monospace',
    borderRadius: '2px',
    background: 'var(--code-background)',
    padding: '3px 5px'
  },
  HIGHLIGHT: {
    background: "var(--highlight)",
    padding: '1px 5px'
  },
  'UNDERLINE': {
    textDecoration: 'underline solid var(--primary)',
  }
};
  
const InlineStyles = props => {

  return (
    <div className="inline-styles">
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