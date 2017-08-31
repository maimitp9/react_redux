import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchUserSuccess, fetchUserFailure, resetActiveUser } from '../../actions/action_users';


class ShowUser extends Component{

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id)
  }

  render(){
    return(
      <div>
        <p>First Name: {JSON.stringify(this.props.user)}</p>
        <p>Last Name: {}</p>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return{
    user: state.users.activeUser.user
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchUser: (id) => {
      (dispatch(fetchUser(id)).payload).then((response) => {
        if(response && response.status !== 200)
          {dispatch(fetchUserFailure(response.data));}
        else
          {dispatch(fetchUserSuccess(response.data));}
      })
    }
  }
}
const show_user = connect(mapStateToProps,matchDispatchToProps) (ShowUser)
export default show_user;
