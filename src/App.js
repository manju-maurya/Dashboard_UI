import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import New from './New.js';
import New2 from './New2.js';
import Top from './Top.js';
import GraphWidget from './GraphWidget.js';
const drawerWidth = 240;

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
	  <Top/>
	  <New/>
	  <New2/>
	  <GraphWidget/>
        <main style={{ flexGrow: 1, padding: 3 }}>
          <Toolbar />
          <Typography paragraph>
	  Hello
            {/* Main content goes here */}
          </Typography>
        </main>
      </div>
    </Router>
  );
};

export default App;

