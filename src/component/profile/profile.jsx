import React from 'react';
import { useAuth0 } from '../../react-auth0-wrapper';
import { Typography, Container, Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import ProfileStyles from './ProfileStyles';

const ProfilePage = ({ classes }) => {
  const { user, logout } = useAuth0();
  return (
    <div>
      <Container>
        <Paper className={classes.root}>
          <Typography variant='h2' color='textPrimary'>
            {user && user.nickname}
            {user && (
              <Button variant='contained' onClick={logout}>
                Log Out
              </Button>
            )}
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default withStyles(ProfileStyles)(ProfilePage);
