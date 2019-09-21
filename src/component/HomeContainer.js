import React from 'react';
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
import NavBar from './NavBar';
import SocialCard from './SocialCard';
import SocialCardList from './SocialCardList';
import CTAContainer from './CTAContainer';
import YouTubeContainer from './YouTubeContainer';
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
      padding: '125px 0 75px'
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
    }
  };
});

function HomeContainer() {
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
          <Grid container justify='space-between' align='center'>
            <Grid item>
              <Typography
                variant='h5'
                className={classes.title}
                color='textSecondary'
              >
                DollNut - 2019
              </Typography>
            </Grid>
            <Grid item>
              <Button color='primary' variant='contained'>
                Follow Me!
              </Button>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
}

export default HomeContainer;