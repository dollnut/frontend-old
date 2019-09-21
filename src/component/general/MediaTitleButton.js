import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '0 0 -15px -5px',
    zIndex: '2000'
  }
}));

const MediaTitleButton = ({ name }) => {
  const classes = useStyles();
  return (
    <Button
      color='secondary'
      variant='contained'
      className={classes.button}
      size='large'
      gutterBottom
    >
      {name}
    </Button>
  );
};

export default MediaTitleButton;
