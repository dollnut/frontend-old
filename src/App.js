import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import {
  Toolbar,
  Typography,
  makeStyles,
  Button,
  Paper,
  Container,
  List,
  ListItem,
  ListItemText,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Avatar,
  GridList,
  GridListTile,
  GridListTileBar,
  Icon
} from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayArrow';
import NavBar from './component/NavBar';
import SocialCard from './component/SocialCard';
import SocialCardList from './component/SocialCardList';
import CTAContainer from './component/CTAContainer';
import YouTubeContainer from './component/YouTubeContainer';
const useStyles = makeStyles(theme => {
  return {
    bg: {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      padding: '50px 0'
    },
    highlight: {
      color: theme.palette.secondary.light
    },
    card: {
      marginTop: '50px'
    },
    youtube: {
      margin: '0 0 15px'
    },
    gutterBottom: {
      padding: '0 0 50px'
    },
    ctaContainer: {
      padding: '75px 0 75px'
    },
    divider: {
      background: theme.palette.secondary.light,
      padding: '15px',
      border: 'none'
    },
    footer: {
      background: theme.palette.primary.main,
      padding: '75px 0 50px'
    },
    title: {
      flewGrow: 1
    }
  };
});

function App() {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <Container className={classes.ctaContainer}>
        <CTAContainer />
      </Container>

      <div className={classes.bg}>
        <Container className={classes.gutterBottom}>
          <SocialCardList />
        </Container>
        <Container className={classes.gutterBottom}>
          <YouTubeContainer />
        </Container>
      </div>
      <footer className={classes.footer}>
        <Container>
          <Typography variant='h4' className={classes.title}>
            DollNut - 2019
          </Typography>
          <Icon className='fab fa-youtube' />
        </Container>
      </footer>
    </>
  );
}

export default App;
