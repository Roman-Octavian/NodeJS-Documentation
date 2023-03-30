import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ArticleIcon from '@mui/icons-material/Article';
import LoginForm from './login-form'

const drawerWidth = 240;

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const introductionSites = ['Getting started'];
  const javaScriptSites = ['Intro', 'Variables', 'Data Types', 'Functions'];
  const nodejsSites = ['Intro', 'Basic Usage', 'Package'];
  const expressSites = ['Intro', 'Basic Usage'];

  const parseURL = (url) => {
    return url.replace(/\s+/g, '-').toLowerCase();
  }

  const drawer = (
    <>
      	<Toolbar />
      	<List
			subheader={
        		<ListSubheader component="div">
            		INTRO
        		</ListSubheader>
    	}>

        {introductionSites.map((text) => (
          	<ListItem key={text} disablePadding>
          		<ListItemButton href='/'>
            		<ListItemText primary={text} />
          		</ListItemButton>
        	</ListItem>
        ))}
      	</List>

	  	<Divider />

      	<List
        	subheader={
            	<ListSubheader component="div">
					      JAVASCRIPT
            	</ListSubheader>
        }>
          
        {javaScriptSites.map((text) => (
          	<ListItem key={text} disablePadding>
            	<ListItemButton href={'/articles/javascript/' + parseURL(text)}>
              		<ListItemText primary={text} />
            	</ListItemButton>
          	</ListItem>
        ))}
      	</List>

		<Divider />

      	<List
        	subheader={
            	<ListSubheader component="div">
					NODEJS
            	</ListSubheader>
        }>
          
        {nodejsSites.map((text) => (
          	<ListItem key={text} disablePadding>
            	<ListItemButton href={'/articles/nodejs/' + parseURL(text)}>
              		<ListItemText primary={text} />
            	</ListItemButton>
          	</ListItem>
        ))}
      	</List>

		<Divider />

      	<List
        	subheader={
            	<ListSubheader component="div">
					EXPRESS
            	</ListSubheader>
        }>
          
        {expressSites.map((text) => (
          	<ListItem key={text} disablePadding>
            	<ListItemButton href={'/articles/express/' + parseURL(text)}>
              		<ListItemText primary={text} />
            	</ListItemButton>
          	</ListItem>
        ))}
      	</List>
    </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          ml: { sm: `${drawerWidth}px` },
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ 
                mr: 2, 
                display: { sm: 'none' }
            }}
          >
            <MenuIcon />
          </IconButton>
          <ArticleIcon sx={{ display: { md: 'flex' }, mr: 2 }} />
          <Typography component="a" href="/" variant="h6" noWrap sx={{ 
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
            flexGrow: 1 
            }}>
            NODE DOCS
          </Typography>
          <LoginForm handleLoginOpen={handleLoginOpen} handleLoginClose={handleLoginClose} loginOpen={loginOpen}/>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Toolbar />
      {props.content}
      </Box>
    </Box>
  );
}

export default Layout;