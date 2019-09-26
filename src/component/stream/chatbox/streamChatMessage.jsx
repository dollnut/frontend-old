import React from 'react';
import {
  ListItem,
  Typography,
  Tooltip,
  Icon,
  Chip,
  Divider
} from '@material-ui/core';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { withStyles } from '@material-ui/styles';
import StreamStyles from '../StreamStyles';

const StreamChatMessage = ({ classes }) => {
  return (
    <>
      <ListItem className=''>
        <Typography variant='body2' color='inherit'>
          <Tooltip title='Tier One Sub' placement='left'>
            <Icon className={classes.chatIcon} size='small'>
              <LoyaltyIcon />
            </Icon>
          </Tooltip>
          <Chip size='small' label='Basic Chip' className={classes.chip} />I
          love bacon Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quam molestias veniam vitae deleniti voluptatibus beatae pariatur
          odit! Maxime, temporibus officia.
        </Typography>
      </ListItem>
      <Divider />
    </>
  );
};

export default withStyles(StreamStyles)(StreamChatMessage);
