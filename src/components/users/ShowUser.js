import React, { Component } from 'react';

class ShowUser extends Component{
  componentDidMount(){
    this.props.fetchUser(this.props.id)
  }

  componentWillUnmount(){
    this.props.resetMe()
  }

  render(){
    const { user, error, loading } = this.props.activeUser;
    if(loading){
      return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
    }else if(error){
      return <div className="alert alert-danger">Error: {error.message}</div>
    } else if (!user) {
      return <span />
    }
    return(
      <div>
        <p>First Name: {user.email}</p>
        <p>Last Name: {user.fname}</p>
      </div>
    )
  }
}

export default ShowUser;
