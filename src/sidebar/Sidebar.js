import './Sidebar.css';
import React from 'react';
import Profile from '../profile/Profile';

const Sidebar = ({profile, children}) => {
  return (
      <div className="sidebar">
        <div className="sidebar-profile">
          <Profile></Profile>
        </div>
        <div className="sidebar-menu">
          <React.Fragment>{children}</React.Fragment>
        </div>
      </div>
  );
};

export default Sidebar;