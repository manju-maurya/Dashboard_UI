// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './b.css';
const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

