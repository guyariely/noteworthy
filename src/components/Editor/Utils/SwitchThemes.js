import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const SwitchThemes = props => {

  return (
    <span className="util themes" onMouseDown={props.toggleThemesModal}>
      <FontAwesomeIcon icon={faPalette} />
    </span>
  );
};

export default SwitchThemes;