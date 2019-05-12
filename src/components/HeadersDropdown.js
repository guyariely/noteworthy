import React from 'react';

const headers = [
  { label: "Title", style: "header-one" },
  { label: "Heading", style: "header-two" },
]; 

const HeadersDropdown = props => {
  
  const onToggle = e => {
    let value = e.target.value;
    props.toggleBlockType(value);
  }
  
  return (
    <select 
      value={props.activeBlock} 
      onChange={onToggle}
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
  )
}


export default HeadersDropdown;
