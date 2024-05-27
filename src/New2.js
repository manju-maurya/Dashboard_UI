import react from 'react';
import {Drawer, Toolbar, List, ListItem,Link,ListItemText} from '@mui/material';

const New2 =()=>{
	
	return(
<Drawer
          variant="permanent"
          sx={{
            width: 90,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 90, boxSizing: 'border-box', marginTop: '5%' },
          }}
        >
          <Toolbar />
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
export default New2;
