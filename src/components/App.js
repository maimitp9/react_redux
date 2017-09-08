import React, { Component } from 'react';
import Routes from '../Routes/Routes';
import Header from '../layout/Header';
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
