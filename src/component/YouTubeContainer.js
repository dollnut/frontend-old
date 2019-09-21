import React from 'react';
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
import MediaTitleButton from './general/MediaTitleButton';

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
                image='https://pbs.twimg.com/profile_images/1165870474393337856/K9OpySa3_200x200.jpg'
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
    </section>
  );
};

export default YouTubeContainer;
