// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import './a.css';
const Sidebar = () => {
  return (
    <Drawer top="20px" variant="permanent" anchor="right">
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/reports">
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;

