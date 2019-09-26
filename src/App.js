import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core';
import HomeContainer from './component/HomeContainer/HomeContainer';
import NavBar from './component/navigation/NavBar.js';
import { Route, Switch } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';
import StreamComponent from './component/stream/StreamComponent';
import './nanoscroller.css';
const useStyles = makeStyles(theme => {
  return {
    root: {
      background: grey[900],
      height: '100%'
    }
  };
});

function App({ location }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/live' component={StreamComponent} />
      </Switch>
    </div>
  );
}

export default App;
