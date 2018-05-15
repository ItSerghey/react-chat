<<<<<<< HEAD
import React from "react";
import { withStyles } from "material-ui/styles";

import { chats, messages } from "./mock-data";

import Sidebar from "./components/sidebar";
import ChatHeader from "./components/ChatHeader";
import Chat from "./components/Chat";
const styles = theme => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette.background.default
  },
});

const App =({ classes }) => (
  <div className={classes.root}>
    <ChatHeader />
    <Sidebar chats={chats} />
    <Chat messages={messages}/>
  </div>
);

export default withStyles(styles)(App);
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
>>>>>>> master
