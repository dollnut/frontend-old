import React from 'react';
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  IconButton,
  Hidden
} from '@material-ui/core';
import StreamIcon from '@material-ui/icons/Tv';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Menu from '@material-ui/icons/Menu';
import SideBar from './SideBar';
import { socialLinks } from '../../data';

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
  const [navbarItems, setNavbarItems] = React.useState(socialLinks);
  const { isAuthenticated, loginWithPopup, loginWithRedirect, logout } = useAuth0();
  const handleClose = () => {
    setSidebarOpen(false);
  };
  const handleOpen = () => {
    setSidebarOpen(true);
  };
  const handleLogin = () => {
    if(isAuthenticated) {
       logout({})
    }else {
     loginWithPopup({})
    }
  }
  return (
    <>
      <AppBar position='static' className={classes.root}>
        <Toolbar component='nav' variant='dense'>
          <ul className={classes.title}>
            <IconButton edge='start' color='inherit' onClick={handleOpen}>
              <Menu />
            </IconButton>
            <Hidden smDown>
              {navbarItems.map(({ title, hideOnNav }) => {
                return (
                  !hideOnNav && (
                    <Button color='inherit' component='li'>
                      {title}
                    </Button>
                  )
                );
              })}
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
          <Button
            className={classes.navItem}
            color='inherit'
            component={Link}
            to='/live'
          >
            <StreamIcon className={classes.icon} />
            Stream
          </Button>
          <Hidden xsDown>
            {isAuthenticated ?  <Button color='inherit' component={Link} to='/me'>
              Account
            </Button>: <Button color='inherit' onClick={handleLogin}>
              Login
            </Button> }
          </Hidden>
        </Toolbar>
      </AppBar>
      <SideBar open={sidebarOpen} handleClose={handleClose} />
    </>
  );
};

export default NavBar;
