import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpand, faCompress } from "@fortawesome/free-solid-svg-icons";

const FullScreen = ({ collapseSidebar, isCollapsed }) => {
  return (
    <span className="util full-screen" onClick={collapseSidebar}>
      <FontAwesomeIcon icon={isCollapsed ? faCompress : faExpand} />
    </span>
  );
};

export default FullScreen;
