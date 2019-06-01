import React from 'react';
import Modal from 'react-modal';
import ThemePreview from './ThemesModalPreview';

const ThemesModal = props => {

  const themes = ['Noteworthy', 'Dark'];

  const switchTheme = theme => {

    const style = document.documentElement.style;

    switch (theme) {

      case 'Noteworthy':
        style.setProperty('--background', 'var(--white-wall)');
        style.setProperty('--sidebar', 'rgb(252, 251, 247)');
        style.setProperty('--notebooks-selection', 'rgba(214, 214, 214, 0.329)');
        style.setProperty('--icons', '#565656');
        style.setProperty('--toolbar-icons', 'rgb(77, 74, 71)');
        style.setProperty('--separator', 'rgb(242, 237, 232)');
        style.setProperty('--utils', '#c0c0c0');
        style.setProperty('--heading', 'rgb(36, 35, 34');
        style.setProperty('--text', 'rgb(36, 35, 34)');
        style.setProperty('--light-text', 'rgb(216, 213, 210)');
        style.setProperty('--primary', 'rgb(239, 155, 110)');
        style.setProperty('--highlight', 'rgb(255, 233, 221)');
        style.setProperty('--code-color', 'rgb(36, 35, 34)');
        style.setProperty('--code-background', 'rgb(235, 235, 235)');
        break;

      case 'Dark':
          style.setProperty('--background', 'rgb(46, 50, 53)');
          style.setProperty('--sidebar', 'rgb(252, 251, 247)');
          style.setProperty('--notebooks-selection', 'rgba(214, 214, 214, 0.329)');
          style.setProperty('--icons', 'rgb(218, 218, 218)');
          style.setProperty('--toolbar-icons', 'rgb(225, 225, 225)');
          style.setProperty('--separator', 'rgb(126, 126, 126)');
          style.setProperty('--utils', '#c0c0c0');
          style.setProperty('--heading', 'rgb(225, 225, 225)');
          style.setProperty('--text', 'rgb(225, 225, 225)');
          style.setProperty('--light-text', 'rgb(216, 213, 210)');
          style.setProperty('--primary', 'rgb(239, 155, 110)');
          style.setProperty('--highlight', 'rgb(179, 105, 66)');
          style.setProperty('--code-color', 'rgb(235, 235, 235)');
          style.setProperty('--code-background', 'rgb(75, 75, 75)');
          break;

      default:
        break;
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      contentLabel="Theme Selection"
      onRequestClose={props.toggleThemesModal}
      closeTimeoutMS={200}
      className="themes-modal"
    >
      <h1 className="themes-title">Themes</h1>
      <div className="themes-previews">
      {
        themes.map(theme => {
          return (
            <ThemePreview 
              theme={theme}
              switchTheme={switchTheme}
            />
          );
        })
      }
      </div>
    </Modal>
  );
};

export default ThemesModal;