// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6">
          Dashboard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

