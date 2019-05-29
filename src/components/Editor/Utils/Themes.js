import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const Themes = () => {

  return (
    <span className="util themes">
      <FontAwesomeIcon icon={faPalette} />
    </span>
  );
};

export default Themes;