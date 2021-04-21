import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExpand,
  faCompress,
  faEdit,
  faPalette,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./QuickAccessButton.scss";

function getIcon(type, isSidebarCollapsed) {
  const iconTypes = {
    delete: faTrashAlt,
    expand: isSidebarCollapsed ? faCompress : faExpand,
    add: faEdit,
    themes: faPalette,
  };

  return iconTypes[type];
}

const QuickAccessButton = ({ handleClick, type, isSidebarCollapsed }) => {
  return (
    <span className={`quick-access-button ${type}`} onClick={handleClick}>
      <FontAwesomeIcon icon={getIcon(type, isSidebarCollapsed)} />
    </span>
  );
};

export default QuickAccessButton;
