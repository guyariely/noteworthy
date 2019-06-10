import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';

const FullScreen = props => {

  return (
    <span 
      className="util full-screen" 
      onClick={props.collapseSidebar}
    >
      <FontAwesomeIcon 
        icon={props.isCollapsed ? faCompress : faExpand } 
      />
    </span>
  );
};

export default FullScreen;