import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.scss";

const Search = () => {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="icon" />
      <input
        className="search-bar-input"
        type="text"
        placeholder="Search Notes"
        spellCheck="false"
      />
    </div>
  );
};

export default Search;
