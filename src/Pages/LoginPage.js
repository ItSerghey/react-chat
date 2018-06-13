import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { withStyles } from 'material-ui';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import LoginForm from '../components/forms/LoginForm';
import SignupForm from '../components/forms/SignupForm';
import ErrorMessage from '../components/ErrorMessage';

const styles = theme => ({
  paper: {
    // eslint-disable-next-line
    marginTop: 64 + theme.spacing.unit * 3,
    width: 500,
  },
  tabContent: {
    // eslint-disable-next-line
    padding: theme.spacing.unit * 3,
  },
});

class LoginPage extends React.Component {
  state = {
    activeTab: 0,
  };

  componentDidMount() {
    this.props.recieveAuth();
  }

  handleChange = (event, value) => {
    this.setState({ activeTab: value });
  };

  render() {
    const {
      classes, signup, login, isAuthenticated, error,
    } = this.props;
    const { activeTab } = this.state;

    if (isAuthenticated) {
      return <Redirect to="/chat" />;
    }
    return (
      <React.Fragment>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flex: 1 }}>
              YourCHAT
            </Typography>
          </Toolbar>
        </AppBar>

        <Grid container justify="center">
          <Grid item>
            <Paper className={classes.paper}>
              <AppBar position="static" color="default">
                <Tabs value={activeTab} onChange={this.handleChange} fullWidth>
                  <Tab label="Login" />
                  <Tab label="Sign Up" />
                </Tabs>
              </AppBar>
              <div className={classes.tabContent}>
                {activeTab === 0 && <LoginForm onSubmit={login} />}
                {activeTab === 1 && <SignupForm onSubmit={signup} />}
              </div>
            </Paper>
          </Grid>
        </Grid>
        <ErrorMessage error={error} />
      </React.Fragment>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  recieveAuth: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
};
LoginPage.defaultProps = {
  error: null,
};

export default withStyles(styles)(LoginPage);
