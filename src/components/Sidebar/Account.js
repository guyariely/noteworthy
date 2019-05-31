import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit, faExternalLinkAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  return (
    <div className="account">
      <div className="app-title">Noteworthy</div>

      <div className="account-utils">
        <FontAwesomeIcon icon={faExternalLinkAlt} className="icon"/>
        <FontAwesomeIcon icon={faUserEdit} className="icon"/>
        <FontAwesomeIcon icon={faSlidersH} className="icon"/>
      </div>
    </div>
  );
};

export default Account;
