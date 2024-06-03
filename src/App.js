import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import BottomNav from './BottomNav.js';
import SideBar from './SideBar.js';
import TopNav from './TopNav.js';
import GraphWidget from './GraphWidget.js';
import BarChart from './BarChart.js';
import DoughnutChart from './DoughnutChart.js';
import PieChart from './PieChart';
import InfiniteScrollComponent from './InfiniteScrollComponent.js';
import Scroll from './Scroll.js';

const drawerWidth = 240;

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
	  <TopNav/>
	  <BottomNav/>
	  <SideBar/>
        <main style={{ flexGrow: 1, padding: 3 }}>
          <Toolbar />
          <Typography paragraph>
	  Hello
	  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
	<  InfiniteScrollComponent/>
	  <Scroll/>
	  <Scroll/>
	  <GraphWidget/>
	  <BarChart/>
	  <GraphWidget/>
	  <PieChart/>
	  <  InfiniteScrollComponent/>
	  <BarChart/>
	  <DoughnutChart/>


	  </div>
            {/* Main content goes here */}
          </Typography>
        </main>
      </div>
    </Router>
  );
};

export default App;

