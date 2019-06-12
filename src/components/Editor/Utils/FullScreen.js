import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const FullScreen = props => {

  let icon;
  if (window.innerWidth <= 1024) {
    icon = faChevronLeft;
  } else {
    icon = props.isCollapsed ? faCompress : faExpand;
  }

  return (
    <span 
      className="util full-screen" 
      onClick={props.collapseSidebar}
    >
      <FontAwesomeIcon 
        icon={icon}
      />
    </span>
  );
};

export default FullScreen;