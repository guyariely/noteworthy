import React from 'react';
import Modal from 'react-modal';

const ThemesModal = props => {

  const themes = ['Noteworthy', 'Dark'];

  const switchTheme = e => {
    e.preventDefault();
    console.log(e);
    
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
            <div
              className={`theme ${theme.toLowerCase()}`}
              onMouseDown={switchTheme}
            >
              <h3 className="preview-heading">{theme}</h3>
              <p>
                This is a preview of the '{theme}' theme. 
                Here are some inline styles to showcase it's style.
                <span> </span>
                <span className="preview-underline">Underline</span>,
                <span> </span>
                <strong>Bold</strong>,
                <span> </span>
                <em>Italic</em>,
                <span> </span>
                <span className="preview-highlight">Highlight</span>
                <span> </span>
                and 
                <span> </span>
                <span className="preview-code">Code</span>.
              </p>

              {
                /*
                      Lorem ipsum 
                <strong> dolor sit amet </strong>
                , consectetur adipiscing elit, sed do 
                <span> </span>
                <span className="preview-underline">eiusmod tempor</span> 
                <span> </span>
                incididunt ut 
                <span className="preview-highlight"> labore et dolore </span> 
                magna aliqua. 
                <span className="preview-code"> Ut enim </span>
                ad minim veniam.
           
                */
              }
            </div>
          );
        })
      }
      </div>
    </Modal>
  );
};

export default ThemesModal;