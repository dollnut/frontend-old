import React from 'react';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';
import StreamIcon from '@material-ui/icons/Tv';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => {
  return {
    title: {
      flexGrow: 1
    },
    icon: {
      marginRight: '3px'
    }
  };
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar component='nav'>
        <ul className={classes.title}>
          <Button color='inherit' component='li'>
            YouTube
          </Button>
          <Button color='inherit' component='li'>
            Discord
          </Button>
          <Button color='inherit' component='li'>
            Instagram
          </Button>
          <Button color='inherit' component='li'>
            Twitter
          </Button>
          <Button color='secondary' variant='contained'>
            <FavoriteIcon className={classes.icon} />
            Support the Stream
          </Button>
        </ul>
        <Button color='inherit'>
          <StreamIcon className={classes.icon} />
          Stream
        </Button>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
