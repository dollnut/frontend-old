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
  GridListTileBar
} from '@material-ui/core';
import StreamIcon from '@material-ui/icons/PlayCircleFilled';
import NavBar from './component/NavBar';
import SocialCard from './component/SocialCard';
import SocialCardList from './component/SocialCardList';
const useStyles = makeStyles(theme => {
  console.log(theme.palette.primary.dark);
  return {
    bg: {
      background: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText
    },
    highlight: {
      color: theme.palette.secondary.light
    },
    card: {
      marginTop: '50px'
    },
    youtube: {
      margin: '50px 0'
    }
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <NavBar />
      <Container>
        <Grid
          container
          spacing={3}
          className={classes.card}
          justify='space-around'
          align='center'
          alignItems='center'
        >
          <Grid item xs={4}>
            <Typography variant='h2' component='h1' color='inherit'>
              DOLL<span className={classes.highlight}>NUT</span>
            </Typography>
            <Typography variant='subtitle1' component='h2'>
              Twitch Analysis on the Best Anime & Manga
            </Typography>

            <Typography variant='subtitle1' gutterBottom component='h4'>
              Everyday 6AM-10AM
            </Typography>
            <br />
            <Button
              color='secondary'
              variant='contained'
              size='large'
              width='100%'
              disabled
              fullWidth
            >
              Live Soon
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='DollNut YouTube Title'
                  height='252px'
                  width='448px'
                  title='YouTube Title'
                  image='https://pbs.twimg.com/profile_images/1165870474393337856/K9OpySa3_200x200.jpg'
                />
              </CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  YouTube Title
                </Typography>
                <Button variant='contained' color='secondary' fullWidth>
                  Watch Now
                </Button>
                <Button color='secondary' fullWidth>
                  Share
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* YouTube List */}
        <Grid
          container
          spacing={3}
          justify='space-between'
          className={classes.youtube}
        >
          <Grid xs={2} align='center'>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='DollNut YouTube Title'
                  title='YouTube Title'
                  image='https://pbs.twimg.com/profile_images/1165870474393337856/K9OpySa3_200x200.jpg'
                  height='140px'
                />
              </CardActionArea>
              <CardContent>
                <Typography variant='subtitle2'>Date</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2} align='center'>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='DollNut YouTube Title'
                  title='YouTube Title'
                  image='https://pbs.twimg.com/profile_images/1165870474393337856/K9OpySa3_200x200.jpg'
                  height='140px'
                />
              </CardActionArea>
              <CardContent>
                <Typography variant='subtitle2'>Date</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2} align='center'>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='DollNut YouTube Title'
                  title='YouTube Title'
                  image='https://pbs.twimg.com/profile_images/1165870474393337856/K9OpySa3_200x200.jpg'
                  height='140px'
                />
              </CardActionArea>
              <CardContent>
                <Typography variant='subtitle2'>Date</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={2} align='center'>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='DollNut YouTube Title'
                  title='YouTube Title'
                  image='https://pbs.twimg.com/profile_images/1165870474393337856/K9OpySa3_200x200.jpg'
                  height='140px'
                />
              </CardActionArea>
              <CardContent>
                <Typography variant='subtitle2'>Date</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid xs={2} align='center'>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  alt='DollNut YouTube Title'
                  title='YouTube Title'
                  image='https://pbs.twimg.com/profile_images/1165870474393337856/K9OpySa3_200x200.jpg'
                  height='140px'
                />
              </CardActionArea>
              <CardContent>
                <Typography variant='subtitle2'>Date</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <SocialCardList />
      </Container>
    </div>
  );
}

export default App;
