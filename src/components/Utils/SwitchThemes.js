import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

const SwitchThemes = ({ toggleThemesModal }) => {
  return (
    <span className="util themes" onClick={toggleThemesModal}>
      <FontAwesomeIcon icon={faPalette} />
    </span>
  );
};

export default SwitchThemes;
