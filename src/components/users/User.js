import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component{

  componentDidMount(){
    this.props.fetchUsers()
  }
  createUserList(users){
    return users.map((user) =>{
      return(
        <li key={user.id}> {user.country_name} {user.continent_name}
          <Link to={`/users/show/${user.id}`}>Show</Link>
        </li>
      )
    });
  }
  render(){

    const { users, loading, error } = this.props.usersList;
    if(loading) {
      return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return(
      <div>
        <h1>User List</h1>
        <ul>
          {this.createUserList(users)}
        </ul>
      </div>
    )
  }
}

export default User;
