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
  Icon,
  Paper
} from '@material-ui/core';
import PlayArrow from '@material-ui/icons/PlayArrow';
import { loadCSS } from 'fg-loadcss';

const useStyles = makeStyles(theme => ({
  highlight: {
    color: theme.palette.secondary.light
  },
  title: {
    // borderBottom: `3px solid ${theme.palette.primary.light}`,
    marginBottom: 15
  },
  liveStatus: {
    padding: 15
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
      // className={classes.card}
      justify='space-around'
      align='center'
      alignItems='center'
    >
      <Grid item xs={10} md={6} sm={10}>
        <Paper className={classes.liveStatus}>
          <Typography
            variant='h2'
            component='h1'
            color='primary'
            className={classes.title}
          >
            DOLL<span className={classes.highlight}>NUT</span>
          </Typography>

          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='DollNut YouTube Title'
                height='252px'
                width='448px'
                title='YouTube Title'
                image='https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg?cs=srgb&dl=baked-goods-bread-bright-1191639.jpg&fm=jpg'
              />
            </CardActionArea>
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='h2'
                color='textPrimary'
              >
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
        </Paper>
      </Grid>
      <Grid item xs={8} sm={6} md={3}>
        <div>
          <Card>
            <CardContent>
              <Typography
                component='p'
                variant='h3'
                color='textPrimary'
                gutterBottom
              >
                24:00
              </Typography>
              <Typography color='textPrimary' variant='h4'>
                Twitch Streams
              </Typography>
              <Typography variant='subtitle1' color='textPrimary'>
                Mon-Fri 6AM-10PM
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </Grid>
  );
};

export default CTAContainer;
