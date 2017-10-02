import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component{

  componentDidMount(){
    this.props.fetchUsers()
  }

  componentWillUnmount() {
    this.props.resetDeletedUser();
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
        { this.createUserList(users) }
      </div>
    )
  }
  createUserList(users){
    return (this.UserDetails(users))
  }

  UserDetails(users){
    return(
      <table className="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Profile Picture</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map( (user,index) => {
          return(
          this.UserRow(user,++index)
          )
        })}
      </tbody>
    </table>
    );
  }

  UserRow(user,index){
    return(
      <tr key={index}>
        <th scope="row">{index}</th>
        <td>{user.fname}</td>
        <td>{user.lname}</td>
        <td>{user.gender === "1" ? "Male" : "Female"}</td>
        <td><img src={`http://localhost:3000/uploads/${user.filename}`} alt={user.filename}/></td>
        <td><Link to={`/users/${user._id}/profile`} className= "btn btn-success">Show</Link>
            <Link to={`/users/${user._id}/edit`} className= "btn btn-default">Edit</Link>        
            <button onClick={this.props.deleteUser.bind(this,user._id, this.props.usersList.users)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }

}

export default User;
