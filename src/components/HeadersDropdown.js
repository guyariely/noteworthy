import React from 'react';

const headers = [
  { label: "Heading", style: "header-two" },
  { label: "Title", style: "header-one" }
]; 

const HeadersDropdown = props => {
  
  const onToggle = e => {
    let value = e.target.value;
    props.toggleBlockType(value);
  };
  
  return (
    <select 
      value={props.activeBlock} 
      onChange={onToggle}
      className="headersDropdown"
    >
      <option value="">Body</option>
      {
        headers.map(heading => {
          return (
            <option 
              value={heading.style} 
              key={heading.style}
            >
              {heading.label}
            </option>
          );
        })
      }
    </select>
  );
};


export default HeadersDropdown;
