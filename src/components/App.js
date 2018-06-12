import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui/styles'; // changed path
import PrivateRoute from '../containers/PrivateRoute';
import configureStore from '../store';
import ChatPage from '../containers/ChatPageContainer';
import LoginPage from '../containers/LoginPageContainer';
import history from '../utils/history';

const styles = theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
});

const store = configureStore();

const App = ({ classes }) => (
  <Provider store={store}>
    <Router history={history}>
      <div className={classes.root}>
        <Switch>
          <Route exact path="/(login)?" component={LoginPage} />
          <PrivateRoute path="/chat/:chatId?" component={ChatPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default withStyles(styles)(App);
