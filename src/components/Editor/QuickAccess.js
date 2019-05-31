import React from 'react';
import NewNote from './Utils/NewNote';
import DeleteNote from './Utils/DeleteNote';
import SwitchThemes from './Utils/SwitchThemes';
import FullScreen from './Utils/FullScreen';

const QuickAccess = props => {

  return (
    <div className="quick-access">
      <NewNote newNote={props.newNote} />     
      <DeleteNote deleteNote={props.deleteNote} />
      <SwitchThemes toggleThemesModal={props.toggleThemesModal}/>
      <FullScreen isCollapsed={props.isCollapsed} collapseSidebar={props.collapseSidebar} />
    </div>
  );
};

export default QuickAccess;