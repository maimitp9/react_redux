import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from '../actions/action_users';

class User extends Component{

  componentDidMount(){
    this.props.fetchUsers()
  }
  createUserList(){
    return this.props.users.map((user) =>{
      return(
        <li key={user.id}> {user.country_name} {user.continent_name}
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
    users: state.users.usersList.users
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchUsers: () => {
      (dispatch(fetchUsers()).payload).then((response) => {
          !response.error ? dispatch(fetchUsersSuccess(response.data)) : dispatch(fetchUsersFailure(response.data));
        })
    }
  }
}

const user = connect(mapStateToProps, matchDispatchToProps) (User)
export default user;
