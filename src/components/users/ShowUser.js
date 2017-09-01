import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUser, fetchUserSuccess, fetchUserFailure, resetActiveUser, resetDeletedUser } from '../../actions/action_users';


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
      (dispatch(fetchUser(id)).payload)
        .then((response) => {
          // Note: Error's "data" is in response.data (inside "response")
          // success's "data" is in response.data
          if(response && response.status !== 200){
            dispatch(fetchUserFailure(response.data));
          }
          else{
            dispatch(fetchUserSuccess(response.data));
          }
      })
    },
    resetMe: () => {
      //clean up both activeUser(currrently open) and deletedUser(open and being deleted) states
      dispatch(resetActiveUser());
      dispatch(resetDeletedUser());
    }
  }
}
const show_user = connect(mapStateToProps,matchDispatchToProps) (ShowUser)
export default show_user;
