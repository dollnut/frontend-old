import React from 'react';
import './App.css';
import { makeStyles, Icon } from '@material-ui/core';
import HomeContainer from './component/HomeContainer/HomeContainer';
import { Route, Switch } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
const useStyles = makeStyles(theme => {
  return {
    root: {
      background: grey[900]
    }
  };
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Switch>
        <Route exact path='/' component={HomeContainer} />
      </Switch>
    </div>
  );
}

export default App;
