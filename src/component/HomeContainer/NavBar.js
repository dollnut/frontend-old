import React from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  IconButton,
  Hidden,
  List,
  ListItem,
  Drawer,
  ListItemText
} from '@material-ui/core';
import StreamIcon from '@material-ui/icons/Tv';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Menu from '@material-ui/icons/Menu';
import { brown } from '@material-ui/core/colors';
import SideBar from './SideBar';

const useStyles = makeStyles(theme => {
  return {
    title: {
      flexGrow: 1
    },
    icon: {
      marginRight: '3px'
    },
    root: {
      background: theme.palette.primary.dark
    },
    navItem: {
      margin: theme.spacing(0, 1)
    }
  };
});

const NavBar = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [navbarItems, setNavbarItems] = React.useState([
    { title: 'YouTube' },
    { title: 'Discord' },
    { title: 'Instagram' },
    { title: 'Twitter' }
  ]);
  const handleClose = () => {
    setSidebarOpen(false);
  };
  const handleOpen = () => {
    setSidebarOpen(true);
  };
  return (
    <>
      <AppBar position='static' className={classes.root}>
        <Toolbar component='nav' variant='dense'>
          <ul className={classes.title}>
            <IconButton edge='start' color='inherit' onClick={handleOpen}>
              <Menu />
            </IconButton>
            <Hidden smDown>
              {navbarItems.map(({ title }) => (
                <Button color='inherit' component='li'>
                  {title}
                </Button>
              ))}
            </Hidden>

            <Button
              color='secondary'
              variant='contained'
              className={classes.navItem}
            >
              <FavoriteIcon className={classes.icon} />
              Support the Stream
            </Button>
          </ul>
          <Button className={classes.navItem} color='inherit'>
            <StreamIcon className={classes.icon} />
            Stream
          </Button>
          <Hidden xsDown>
            <Button color='inherit'>Login</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <SideBar open={sidebarOpen} handleClose={handleClose} />
    </>
  );
};

export default NavBar;
