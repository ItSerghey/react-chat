import React from "react";
import { withStyles } from 'material-ui/styles';//changed path

import { Provider } from 'react-redux';
import configureStore from '../store';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ChatPage from '../containers/ChatPageContainer';
import LoginPage from '../containers/LoginPageContainer';

const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default
  },
});

const store = configureStore();

const App = ({ classes }) => (
  <Provider store={store} >
    <Router>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/(login)?" component={LoginPage} />
          <Route path="/chat" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default withStyles(styles)(App);
