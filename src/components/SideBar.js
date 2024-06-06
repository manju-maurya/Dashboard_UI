
import {Drawer, Toolbar, List, ListItem,Link,ListItemText} from '@mui/material';

const SideBar =()=>{
	
	return(
<Drawer
          variant="permanent"
          sx={{
            width: 110,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: 110, boxSizing: 'border-box', marginTop: '5%' },
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
export default SideBar;

