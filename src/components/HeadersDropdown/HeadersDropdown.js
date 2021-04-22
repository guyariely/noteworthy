import React from "react";

const headers = [
  { label: "Title", style: "header-one" },
  { label: "Heading", style: "header-two" },
  { label: "Body", style: "unstyled" },
];

const HeadersDropdown = ({ activeBlock, toggleBlockType }) => {
  return (
    <select
      value={activeBlock}
      onChange={e => toggleBlockType(e.target.value)}
      className="headersDropdown"
    >
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
