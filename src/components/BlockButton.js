import React from "react"

const BlockButton = props => {

  const onToggle = e => {
    e.preventDefault();
    props.toggleBlockType(props.blockType.style);
  }

  let className = "styleButton";
  if (props.active) className += " active";

  return (
    <button 
      className={className} 
      onClick={onToggle}
    >
      {props.blockType.label}
    </button>
  );
}

export default BlockButton;