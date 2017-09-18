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
        <p><img src={`http://localhost:3000/uploads/${user.filename}`} alt={user.filename}/></p>
        <p><strong>Name:</strong> {user.fname + " "+ user.lname}</p>
        <p><strong>Gender:</strong> {user.gender === "1" ? "Male" : "Female"}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Address:</strong> {user.address}</p>        
      </div>
    )
  }
}

export default ShowUser;
