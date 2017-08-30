import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showUser } from '../../actions/action_users';


class ShowUser extends Component{

  componentDidMount(){
    this.props.showUser(this.props.match.params.id)
  }

  render(){
    return(
      <div>
        <p>First Name: {this.props.user.fname}</p>
        <p>Last Name: {this.props.user.lname}</p>
      </div>
    )
  }
}

function mapStateToProps(state, props){
  return{
    user: state.users
  }
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    showUser: showUser
  }, dispatch)
}
const show_user = connect(mapStateToProps,matchDispatchToProps) (ShowUser)
export default show_user;
