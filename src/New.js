import React from 'react';
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, CssBaseline } from '@mui/material';


const New = () => {
  return (

<AppBar position="fixed" sx={{ justifyContent: 'center',  backgroundColor:'#546475', height:40, top:50, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              My Application
            </Typography>
          </Toolbar>
        </AppBar>
  );
};
export default New;
