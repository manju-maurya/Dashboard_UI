import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Toolbar, Typography } from '@mui/material';
//Importing components
import BottomNav from './components/BottomNav.js';
import SideBar from './components/SideBar.js';
import TopNav from './components/TopNav.js';
import GraphWidget from './components/GraphWidget.js';
import BarChart from './components/BarChart.js';
import DoughnutChart from './components/DoughnutChart.js';
import PieChart from './components/PieChart.js';
import InfiniteScrollComponent from './components/InfiniteScrollComponent.js';
import Scroll from './components/Scroll.js';
import New from './components/New.js'


const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
	 	 <TopNav/>
	 	 <BottomNav/>
	 	 <SideBar/>

         <main style={{ flexGrow: 1, padding: 5 }}>
           <Toolbar />
           <Typography paragraph>
	  			Hello
	  	    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px' }}>

	  		<New widgetId="chart3"/>
	  		<New widgetId="chart4"/>
	  		<New widgetId="chart1"/>
	  		<New widgetId="chart2"/>

	  		<InfiniteScrollComponent/>
	 		<Scroll/>
	 		<Scroll/>
	 		<GraphWidget/>
	 		<BarChart/>
			<GraphWidget/>
	 		<PieChart/>
	  		<InfiniteScrollComponent/>
	 		<BarChart/>
	 		<DoughnutChart/>

	      </div>
          </Typography>
        </main>
      </div>
    </Router>
  );
};

export default App;

