import React from "react";

const headers = [
  { label: "Heading", style: "header-two" },
  { label: "Title", style: "header-one" },
];

const HeadersDropdown = ({ activeBlock, toggleBlockType }) => {
  return (
    <select
      value={activeBlock}
      onChange={e => toggleBlockType(e.target.value)}
      className="headersDropdown"
    >
      <option value="">Body</option>
      {headers.map(heading => {
        return (
          <option value={heading.style} key={heading.style}>
            {heading.label}
          </option>
        );
      })}
    </select>
  );
};

export default HeadersDropdown;
