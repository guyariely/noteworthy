import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  return (
    <div className="search-bar">
      <FontAwesomeIcon icon={faSearch} className="icon" />
      <input type="text" placeholder="Search" spellCheck="false" />
    </div>
  );
};

export default Search;