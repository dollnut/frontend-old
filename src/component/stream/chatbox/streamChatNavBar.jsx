import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import SettingsIcon from '@material-ui/icons/Settings';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import HelpIcon from '@material-ui/icons/Help';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { withStyles } from '@material-ui/styles';
import StreamStyles from '../StreamStyles';

const StreamChatNavBar = ({ value, handleChange, classes }) => {
  return (
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
      {/* <BottomNavigationAction
        value='emotes'
        label='Emotes'
        icon={<EmojiEmotionsIcon />}
      /> */}
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
      {/* <BottomNavigationAction value='help' label='Help' icon={<HelpIcon />} /> */}
    </BottomNavigation>
  );
};

export default withStyles(StreamStyles)(StreamChatNavBar);
