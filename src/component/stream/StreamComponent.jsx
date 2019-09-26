import React from 'react';
import { Grid, withStyles } from '@material-ui/core';
import ResponsiveEmbed from 'react-responsive-embed';

import StreamStyles from './StreamStyles';
import StreamChatBox from './chatbox/streamChatBox';

const StreamComponent = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Grid container justify='space-around'>
        <Grid item md={8} xs={10}>
          <div>
            <ResponsiveEmbed
              src='https://player.twitch.tv/?channel=dollnut'
              allowFullScreen
              ratio='16:9'
            />
          </div>
        </Grid>
        <Grid item md={3} xs={10}>
          <StreamChatBox />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(StreamStyles)(StreamComponent);
