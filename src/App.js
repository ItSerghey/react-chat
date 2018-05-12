import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Input from 'material-ui/Input';

import {chats,messages} from '.mock-data';

import List, {ListItem,ListItemText } from 'material-ui/List';
const drawerWidth = 320;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  input: {
    margin: theme.spacing.unit,
  },
});

class PermanentDrawer extends React.Component {

  render() {
    const { classes } = this.props;



    return (

      <div className={classes.appFrame}>
        <AppBar
          position="absolute"
          className={classes.appBar}
        >
          <Toolbar>
            <Typography variant="title" color="inherit" noWrap>
              DogeCodes React Chat
              </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
        {/*   <div className={classes.toolbar} /> */}
        <div className={classes.drawerHeader}>
          <Input
        placeholder="Search chats..."
        className={classes.input}
        inputProps={{
          'aria-label': 'Description',
        }}
      /></div>
          <Divider />
          <List className="classes.chatsList"></List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography>{'You think water moves fast? You should see ice.'}</Typography>
        </main>

      </div>

    );
  }
}



export default withStyles(styles)(PermanentDrawer);
