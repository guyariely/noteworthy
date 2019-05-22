import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress, faPalette, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';

const Utilities = props => {

  return (
    <div className="utilities">
      <span 
        className="utility expand" 
        onMouseDown={props.collapseSidebar}
      >
        <FontAwesomeIcon 
          icon={props.isCollapsed ? faExpand : faCompress} 
        />
      </span>

      <span className="utility">
        <FontAwesomeIcon icon={faPalette} />
      </span>
      <span className="utility">
        <FontAwesomeIcon icon={faTrashAlt} />
      </span>
      <span className="utility">
        <FontAwesomeIcon icon={faPlusSquare} />
      </span>
    </div>
  );
};

export default Utilities;