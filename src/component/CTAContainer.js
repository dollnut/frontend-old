import React from 'react';
import {
  Grid,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles,
  CardContent,
  Icon
} from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { loadCSS } from 'fg-loadcss';

const useStyles = makeStyles(theme => ({
  highlight: {
    color: theme.palette.secondary.light
  },
  title: {
    borderBottom: `3px solid ${theme.palette.primary.light}`
  }
}));

const CTAContainer = () => {
  const classes = useStyles();
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);
  return (
    <Grid
      container
      spacing={3}
      className={classes.card}
      justify='space-around'
      align='center'
      alignItems='center'
    >
      <Grid item xs={4}>
        <Typography variant='h1' component='h6' color='textPrimary'>
          24:00
        </Typography>
        <Typography
          variant='h2'
          component='h1'
          color='primary'
          className={classes.title}
        >
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
          <PlayArrow />
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
  );
};

export default CTAContainer;
