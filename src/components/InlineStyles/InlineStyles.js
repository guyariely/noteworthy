import React from "react";
import StyleButton from "../StyleButton/StyleButton";

const inlineTypes = [
  { label: "faBold", style: "BOLD" },
  { label: "faItalic", style: "ITALIC" },
  { label: "faUnderline", style: "UNDERLINE" },
  { label: "faStrikethrough", style: "STRIKETHROUGH" },
  { label: "faHighlighter", style: "HIGHLIGHT" },
  { label: "faCode", style: "CODE" },
];

export const styleMap = {
  CODE: {
    color: "var(--color-code)",
    fontFamily: "monospace",
    borderRadius: "2px",
    background: "var(--color-code-background)",
    padding: "3px 5px",
  },
  HIGHLIGHT: {
    background: "var(--primary-light)",
    padding: "1px 5px",
  },
  UNDERLINE: {
    textDecoration: "underline solid var(--primary)",
  },
  STRIKETHROUGH: {
    opacity: "0.4",
    textDecoration: "line-through",
  },
};

const InlineStyles = props => {
  return (
    <div className="inline-styles">
      {inlineTypes.map(inlineType => {
        return (
          <StyleButton
            key={inlineType.label}
            label={inlineType.label}
            style={inlineType.style}
            toggleStyle={props.toggleInlineStyle}
            active={props.activeStyle.has(inlineType.style)}
          />
        );
      })}
    </div>
  );
};

export default InlineStyles;
