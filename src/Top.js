import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';


const Top = () => {
  return (

<AppBar position="fixed" sx={{ height:50,backgroundColor: '#2d3945', justifyContent: 'center', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Heloo app
            </Typography>
          </Toolbar>
        </AppBar>
  );
};
export default Top;
