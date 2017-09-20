import React, { Component } from 'react';
import UserForm from './UserForm'


class EditUser extends Component{

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id)
  }

  componentWillReceiveProps(newProps){
    if(newProps.updateUser.status){
      this.props.history.push(`/users/${newProps.updateUser.user._id}/profile`)
    }
  }

  componentWillUnmount() {
    this.props.resetMe();  
  }

  submitForm(values){    
    const formData = new FormData();
    for(const key in values){
      if(key === 'avatar'){
        formData.append(key, values[key][0])
      }else{
        formData.append(key, values[key])
      }
    }
    this.props.editUser(formData)
  }

  render(){
    const {user, error, loading} = this.props.activeUser;
      if(loading){
        return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
      }else if (error) {
        return <div className="alert alert-danger">Error: {error.message}</div>
      }

      return( 
        <div className="col-md-6">
          <div className="panel panel-primary">
            <div className="panel-heading">Edit Employee</div>
            <div className="panel-body">
              <UserForm onSubmit={this.submitForm.bind(this)} initialValues={user} />
            </div>
          </div>
        </div>
      )
  }
}

export default EditUser;