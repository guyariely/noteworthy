import React from 'react';
import NewNote from './Utils/NewNote';
import DeleteNote from './Utils/DeleteNote';
import Themes from './Utils/Themes';
import FullScreen from './Utils/FullScreen';

const QuickAccess = props => {

  return (
    <div className="quick-access">
      <NewNote newNote={props.newNote} />     
      <DeleteNote deleteNote={props.deleteNote} />
      <Themes />
      <FullScreen isCollapsed={props.isCollapsed} collapseSidebar={props.collapseSidebar} />
    </div>
  );
};

export default QuickAccess;