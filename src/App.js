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
import HomeContainer from './component/HomeContainer';
import { grey } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => {
  return {
    bg: {
      background: theme.palette.primary.main,
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
      background: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
      padding: '25px 0 25px'
    },
    title: {
      flewGrow: 1
    },
    root: {
      background: grey[900]
    }
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HomeContainer />
    </div>
  );
}

export default App;
