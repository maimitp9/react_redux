import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: ComposedComponent, ...rest}) => {

  // redirect if not authenticated; otherwise, return the component imputted into <PrivateRoute />
  class Authentication extends Component{

    handleRender(props) {
      if(!this.props.authenticated){
        return <Redirect to={{
          pathname: '/auth/login',
          state: {
            from: props.location,
            message: 'You need to sign in'
          }
        }} />
      } else {
        return <ComposedComponent {...props} />
      }
    }

    render(){
      return(
          <Route {...rest} render={this.handleRender.bind(this)} />
      )
    }
  } 

  const mapStateToProps = (state, ownProps) => {
    return{
      authenticated: localStorage.getItem('access_token') ? true : false
    }
  }

  const AuthenticationContainer = connect(mapStateToProps)(Authentication)
  return <AuthenticationContainer/>
}

export default PrivateRoute;