import React from 'react';
import {
  Typography,
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from '@material-ui/core';

const useStyles = makeStyles(themes => ({}));

const YouTubeContainer = ({ className }) => {
  const classes = useStyles();

  return (
    <section>
      <Grid
        container
        spacing={3}
        justify='space-between'
        className={classes.youtube}
      >
        <Grid xs={2} align='center' className={className}>
          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                alt='DollNut YouTube Title'
                title='YouTube Title'
                image='https://images.pexels.com/photos/1927573/pexels-photo-1927573.jpeg?cs=srgb&dl=abstract-painting-art-artistic-1927573.jpg&fm=jpg'
                // height='140px'
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
                image='https://images.pexels.com/photos/1927573/pexels-photo-1927573.jpeg?cs=srgb&dl=abstract-painting-art-artistic-1927573.jpg&fm=jpg'
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
                image='https://images.pexels.com/photos/1927573/pexels-photo-1927573.jpeg?cs=srgb&dl=abstract-painting-art-artistic-1927573.jpg&fm=jpg'
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
                image='https://images.pexels.com/photos/1927573/pexels-photo-1927573.jpeg?cs=srgb&dl=abstract-painting-art-artistic-1927573.jpg&fm=jpg'
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
                image='https://images.pexels.com/photos/1927573/pexels-photo-1927573.jpeg?cs=srgb&dl=abstract-painting-art-artistic-1927573.jpg&fm=jpg'
                height='140px'
              />
            </CardActionArea>
            <CardContent>
              <Typography variant='subtitle2'>Date</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
};

export default YouTubeContainer;
