import React from "react";
import "./white-wall.png";
import "./ThemesPreview.scss";

const ThemePreview = ({ theme }) => {
  const switchTheme = () => {
    document.documentElement.setAttribute("data-theme", theme.toLowerCase());
  };

  return (
    <div
      className={`theme-preview ${theme.toLowerCase()}`}
      onClick={switchTheme}
    >
      <h3 className="preview-heading">{theme}</h3>
      <p className="preview-text">
        This is a preview of the '{theme}' theme. Here are some inline styles to
        showcase it's style.
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
