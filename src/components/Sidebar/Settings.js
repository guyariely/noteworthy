import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
  return (
    <div className="settings">
      <div className="app-title">Noteworthy</div>
      <FontAwesomeIcon icon={faSlidersH} className="icon"/>
    </div>
  );
};

export default Settings;
