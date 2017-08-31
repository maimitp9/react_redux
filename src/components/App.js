import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../layout/Header';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
        <Routes />
      </div>
    );
  }
}

export default App;
