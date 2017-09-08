import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component{

  componentDidMount(){
    this.props.fetchUsers()
  }

  createUserList(users){
    return users.map((user) =>{
      return(
        <li key={user.id}> {user.email} {user.fname}
          <Link to={`/users/show/${user.id}`}>Show</Link>
          <button onClick={this.props.deleteUser.bind(this,user.id, this.props.usersList.users)}>Delete</button>
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
        <Link to='/users/new-user'>New User</Link>
        <ul>
          {this.createUserList(users)}
        </ul>
      </div>
    )
  }
}

export default User;
