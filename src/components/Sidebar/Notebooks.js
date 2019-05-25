import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

const notebooks = ['Drafts', 'App Ideas', 'Homeworks'];

const Notebooks = () => {
  return (
    <div className="notebooks">
      <p className="notebooks-title">LIBRARY</p>
      {
        notebooks.map(notebook => {
          return (
            <div className="notebook">
              <p>
                <FontAwesomeIcon icon={faFolder} className="notebook-icon"/> 
                {notebook} 
                </p>
            </div>
          );
        })
      }
    </div>
  );
};

export default Notebooks;