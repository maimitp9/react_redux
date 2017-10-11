import React, { Component } from 'react';
import Routes from '../Routes/Routes';
// tag name must be capital
import Header from '../containers/headerContainer';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;