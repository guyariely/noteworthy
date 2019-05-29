import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  return (
    <div className="account">
      <h3>
        <FontAwesomeIcon icon={faSignOutAlt} className="icon"/>
        Account
      </h3>
    </div>
  );
};

export default Account;