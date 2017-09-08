import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{

  render(){
    return(
      <div className="container-fluid">
        <Link to="/" className="link"> Home </Link>
        <Link to="/users">Users</Link>
      </div>
    )
  }
}
export default Header;
