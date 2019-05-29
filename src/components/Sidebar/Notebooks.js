import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faRecycle, faBookmark, faArchive } from '@fortawesome/free-solid-svg-icons';

const notebooks = ['Drafts', 'App Ideas', 'Homeworks', 'Math', 'Groceries'];

const Notebooks = () => {
  return (
    <div className="notebooks">

      <p className="notebooks-title">LIBRARY</p>

      <div className="notebook bookmarks">
        <p>
          <FontAwesomeIcon icon={faBookmark} className="icon"/> 
          Bookmarks
        </p>
      </div>

      <div className="notebook all-notes">
        <p>
          <FontAwesomeIcon icon={faArchive} className="icon"/>
          All Notes 
        </p>
      </div>

      {
        notebooks.map(notebook => {
          return (
            <div className="notebook">
              <p>
                <FontAwesomeIcon icon={faBook} className="icon"/> 
                {notebook} 
              </p>
            </div>
          );
        })
      }

      <div className="notebook recycle-bin">
        <p>
          <FontAwesomeIcon icon={faRecycle} className="icon"/> 
          Recycle Bin 
        </p>
      </div>
    </div>
  );
};

export default Notebooks;