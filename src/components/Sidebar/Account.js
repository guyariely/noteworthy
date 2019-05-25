import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Account = () => {
  return (
    <div className="account">
      <h3>
        <FontAwesomeIcon icon={faUserCircle} className="account-icon"/>
        Guy Arieli
      </h3>
      <p>guyarieli1997@gmail.com</p>
    </div>
  );
};

export default Account;