import React from 'react';

const Sidebar = props => {

    const className = props.isCollapsed ? "sidebar-container collapsed" : "sidebar-container";

    return (
      <div className={className}>
          <div className="sidebar">
          <h1>Sidebar</h1>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
          <p>test</p>
        </div>
      </div>
    );
};

export default Sidebar;