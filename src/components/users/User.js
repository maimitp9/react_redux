import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component{

  componentDidMount(){
    this.props.fetchUsers()
  }

  createUserList(users){
    return (this.UserDetails(users))
    // return users.map((user) =>{
    //   return(
    //     <li key={user._id}> {user.fname} {user.lname}
    //       <Link to={`/users/show/${user.id}`}>Show</Link>
    //       <button onClick={this.props.deleteUser.bind(this,user.id, this.props.usersList.users)}>Delete</button>
    //     </li>
    //   )
    // });
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
        { this.createUserList(users) }
      </div>
    )
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
          <th>Ptofile Picture</th>
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
            <button onClick={this.props.deleteUser.bind(this,user._id, this.props.usersList.users)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }

}

export default User;
