import React, { useState, useRef, useEffect } from 'react';
import { Grid, Paper, Typography, withStyles } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotesIcon from '@material-ui/icons/Notes';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import HelpIcon from '@material-ui/icons/Help';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import StreamStyles from './StreamStyles';
import StreamChatNavBar from './chatbox/streamChatNavBar';
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
      <Grid container justify='space-around' style={{ height: '100vh' }}>
        <Grid
          item
          md={8}
          ref={ref}
          style={{ maxHeight: height, height: '100%' }}
        >
          <iframe
            src='https://player.twitch.tv/?channel=dollnut'
            height={'100%'}
            width='100%'
          ></iframe>
        </Grid>
        <Grid item md={3}>
          <StreamChatBox height={height} />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(StreamStyles)(StreamComponent);
