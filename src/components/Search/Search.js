import React from "react";
import "./Search.scss";

const Search = ({ searchInput, setSearchInput }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search notes..."
        spellCheck="false"
        onChange={e => setSearchInput(e.target.value)}
        value={searchInput}
      />
    </div>
  );
};

export default Search;
