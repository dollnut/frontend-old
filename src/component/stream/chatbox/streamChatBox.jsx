import React, { useState, useRef, useEffect } from 'react';
import StreamChatNavBar from './streamChatNavBar';
import { withStyles } from '@material-ui/styles';
import StreamStyles from '../StreamStyles';
import StreamChatMessageList from './streamChatMessageList';
import { Paper, TextField, Input } from '@material-ui/core';
import nanoScroller from 'nanoscroller';
import $ from 'jquery';

const StreamChatBox = ({ height, classes }) => {
  const [value, setValue] = useState('chat');
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const ref = useRef(null);
  useEffect(() => {
    // ref.current.nanoScroller({ scroll: 'bottom' });
  }, []);
  return (
    <Paper className={`${classes.chatRoot} `} ref={ref}>
      <StreamChatNavBar value={value} handleChange={handleChange} />
      <StreamChatMessageList />
      <Input
        variant='outline'
        multiline
        placeholder='Chat something nice!'
        className={classes.chatTextField}
      />
    </Paper>
  );
};

export default withStyles(StreamStyles)(StreamChatBox);
