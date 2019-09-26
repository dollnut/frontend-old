import React, { useState, useRef, useEffect } from 'react';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import ResponsiveEmbed from 'react-responsive-embed';

import StreamStyles from './StreamStyles';
import StreamChatBox from './chatbox/streamChatBox';

const StreamComponent = ({ classes }) => {
  const ref = useRef(null);

  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    setHeight((width / 16) * 9);
  }, [ref.current]);

  return (
    <div className={classes.root}>
      <Grid container justify='space-around'>
        <Grid item md={8} xs={10} ref={ref}>
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
