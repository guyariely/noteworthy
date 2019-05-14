import React from "react";

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
      {props.label}
    </button>
  );
};

export default StyleButton;