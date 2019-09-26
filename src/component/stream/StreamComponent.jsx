import React, { useState, useRef, useEffect } from 'react';
import {
  Grid,
  Paper,
  Typography,
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
  List,
  ListItem,
  Chip,
  Avatar,
  Divider,
  Icon,
  Tooltip
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NotesIcon from '@material-ui/icons/Notes';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import HelpIcon from '@material-ui/icons/Help';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';

import StreamStyles from './StreamStyles';

const StreamComponent = ({ classes }) => {
  const ref = useRef(null);

  const [width, setWidth] = useState(1024);
  const [height, setHeight] = useState(0);
  const [value, setValue] = useState('chat');
  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
    setHeight((width / 16) * 9);
  }, [ref.current]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

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
          <Paper style={{ height }} className={classes.chatRoot}>
            <BottomNavigation
              className={classes.chatNav}
              value={value}
              onChange={handleChange}
            >
              <BottomNavigationAction
                value='chat'
                label='Chat'
                icon={<ChatBubbleIcon />}
              />
              <BottomNavigationAction
                value='emotes'
                label='Emotes'
                icon={<EmojiEmotionsIcon />}
              />
              <BottomNavigationAction
                value='donate'
                label='Donate'
                icon={<LoyaltyIcon />}
              />
              <BottomNavigationAction
                value='settings'
                label='Settings'
                icon={<SettingsIcon />}
              />
              <BottomNavigationAction
                value='help'
                label='Help'
                icon={<HelpIcon />}
              />
            </BottomNavigation>
            <div>
              <List dense>
                <ListItem>
                  <Typography variant='body2' color='inherit'>
                    <Tooltip title='Tier One Sub' placement='left'>
                      <Icon className={classes.chatIcon} size='small'>
                        <LoyaltyIcon />
                      </Icon>
                    </Tooltip>
                    <Chip
                      size='small'
                      label='Basic Chip'
                      className={classes.chip}
                    />
                    I love bacon Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quam molestias veniam vitae deleniti
                    voluptatibus beatae pariatur odit! Maxime, temporibus
                    officia.
                  </Typography>
                </ListItem>{' '}
                <Divider />
              </List>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(StreamStyles)(StreamComponent);
