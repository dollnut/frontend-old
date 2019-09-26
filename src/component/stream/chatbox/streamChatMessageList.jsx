import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import StreamStyles from '../StreamStyles';
import StreamChatMessage from './streamChatMessage';
import { List } from '@material-ui/core';
import nanoScroller from 'nanoscroller';
import $ from 'jquery';

const StreamChatMessageList = ({ classes }) => {
  useEffect(() => {
    $('.nano').nanoScroller();
    $('.nano').nanoScroller({ scroll: 'bottom' });
  });

  return (
    <div className='nano'>
      <List dense className={`${classes.chatMessageList} nano-content`}>
        {[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          1,
          1,
          11,
          1,
          1,
          ,
          1,
          1,
          1,
          11,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          11,
          1,
          1
        ].map(() => (
          <StreamChatMessage />
        ))}
      </List>
      <div className='nano-pane'>
        <div className={`nano-slider ${classes.nanoSlider}`}></div>
      </div>
    </div>
  );
};

export default withStyles(StreamStyles)(StreamChatMessageList);
