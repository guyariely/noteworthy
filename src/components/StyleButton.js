import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faUnderline, faItalic, faHighlighter, faCode, faListOl, faListUl, faQuoteRight, faFileCode } from '@fortawesome/free-solid-svg-icons';

const icons = { faBold, faUnderline, faItalic, faHighlighter, faCode, faListOl, faListUl, faQuoteRight, faFileCode };

const StyleButton = props => {

  const onToggle = e => {
    e.preventDefault();
    props.toggleStyle(props.style);
  };

  const className = props.active ? "style-button active" : "style-button";

  return (
    <button 
      className={`${props.style.toLowerCase()} ${className}`} 
      onMouseDown={onToggle}
    >
      <FontAwesomeIcon icon={icons[props.label]} />
    </button>
  );
};

export default StyleButton;