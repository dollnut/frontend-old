import React from 'react';
import {
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider
} from '@material-ui/core';

const SocialCard = ({ website }) => {
  return (
    <div>
      <Typography variant='h4' component='h3' color='inherit' gutterBottom>
        {website}
      </Typography>
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
