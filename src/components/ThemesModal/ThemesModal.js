import React from "react";
import Modal from "../Modal/Modal";
import ThemePreview from "../ThemePreview/ThemesPreview";
import "./ThemesModal.scss";

const ThemesModal = props => {
  const themes = [
    "Noteworthy",
    "Eclipse",
    "Bloom",
    "Gloom",
    "Solarized",
    "Newspaper",
    "Raspberry",
    "Ocean",
  ];

  return (
    <Modal modalIsOpen={props.isOpen} closeModal={props.toggleThemesModal}>
      {
        <div className="themes-modal">
          <h1 className="themes-title">Themes</h1>
          <div className="themes-previews">
            {themes.map(theme => {
              return <ThemePreview key={theme} theme={theme} />;
            })}
          </div>
        </div>
      }
    </Modal>
  );
};

export default ThemesModal;
