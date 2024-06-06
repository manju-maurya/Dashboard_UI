import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';


const TopNav = () => {
  return (

<AppBar position="fixed" sx={{ height:50,backgroundColor: '#2d3945', justifyContent: 'center', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap style={{margin:'auto'}}>
              <h3 >TIME BAR</h3>
            </Typography>
          </Toolbar>
        </AppBar>
  );
};
export default TopNav;
