import React, { Component } from 'react';
import './css/App.css';
import Router from "./components/Router";

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router />
      </React.Fragment>
    );
  }
}

export default App;