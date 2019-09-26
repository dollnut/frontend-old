import React from 'react';
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: '0 0 -15px -5px',
    zIndex: '2000'
  }
}));

const SocialCard = ({ website }) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant='contained'
        size='large'
        color='secondary'
        gutterBottom
        className={classes.button}
      >
        {website}
      </Button>
      <Paper>
        <List dense component='nav' aria-label='twitter posts'>
          <ListItem button>
            <ListItemText primary='Tweet' secondary='9/13/2019' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary='Tweet' secondary='9/13/2019' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary='Tweet' secondary='9/13/2019' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary='Tweet' secondary='9/13/2019' />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary='Tweet' secondary='9/13/2019' />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default SocialCard;
