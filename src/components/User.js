import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userList } from '../actions/action_users';

class User extends Component{

  componentDidMount(){
    this.props.userList()
  }
  createUserList(){
    return this.props.users.map((user) =>{
      return(
        <li key={user.id}> {user.fname} {user.lname}
          <Link to={`/users/show/${user.id}`}>Show</Link>
        </li> 
      )
    });
  }
  render(){
    return(
      <div>
        <h1>User List</h1>
        <ul>
          {this.createUserList()}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
  return{
    users: state.users
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    userList: userList
  }, dispatch)
}

const user = connect(mapStateToProps, matchDispatchToProps) (User)
export default user;
