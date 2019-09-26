import React, { useState } from 'react';
import StreamChatNavBar from './streamChatNavBar';
import { withStyles } from '@material-ui/styles';
import StreamStyles from '../StreamStyles';
import StreamChatMessageList from './streamChatMessageList';
import { Paper, Input } from '@material-ui/core';

const StreamChatBox = ({ height, classes }) => {
  const [value, setValue] = useState('chat');
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper className={`${classes.chatRoot} `}>
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
