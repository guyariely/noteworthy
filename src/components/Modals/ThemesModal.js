import React from 'react';
import Modal from 'react-modal';

const ThemesModal = props => {

  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Theme Selection"
      onRequestClose={props.toggleThemesModal}
      closeTimeoutMS={200}
      className="ThemesModal"
    >
      <h1>Select a theme</h1>
      <p>Theme</p>
      <p>Theme</p>
      <p>Theme</p>
      <p>Theme</p>
      <p>Theme</p>
      <p>Theme</p>
      <p>Theme</p>
      <p>Theme</p>
    </Modal>
  );
};

export default ThemesModal;