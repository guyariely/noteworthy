import React from "react";

const ThemePreview = props => {
  const switchTheme = () => {
    props.switchTheme(props.theme);
  };

  return (
    <div className={`theme ${props.theme.toLowerCase()}`} onClick={switchTheme}>
      <h3 className="preview-heading">{props.theme}</h3>
      <p>
        This is a preview of the '{props.theme}' theme. Here are some inline
        styles to showcase it's style.
        <span> </span>
        <span className="preview-underline">Underline</span>,<span> </span>
        <strong>Bold</strong>,<span> </span>
        <em>Italic</em>,<span> </span>
        <span className="preview-highlight">Highlight</span>
        <span> </span>
        and
        <span> </span>
        <span className="preview-code">Code</span>.
      </p>
    </div>
  );
};

export default ThemePreview;
