import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{

	logoutUser = () => {
		this.props.logout()
	}
	renderLinks(){
		if(this.props.authenticated) {
			return(
				<div>
					<li><Link to="/companies">Companies</Link></li>
					<li><a href="javascript:void(0)" onClick={this.logoutUser.bind(this)}>Logout</a></li>
				</div>
			)
		}else{
			return (<li><Link to="/auth/login">Login</Link></li>)
		} 
	}

  render(){
    return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <Link to="/" className="navbar-brand"> React Redux </Link>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav navbar-right">
							{this.renderLinks()}
							{/* <li><Link to="/users">Users</Link></li> */}
			      </ul>
			    </div>
			  </div>
			</nav>
    )
  }
}

export default Header;
