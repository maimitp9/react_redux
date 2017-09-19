import React, { Component } from 'react';
import UserForm from './UserForm'


class EditUser extends Component{

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id)
    
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
        <div>
         <UserForm onSubmit={this.submitForm.bind(this)} initialValues={user} />
        </div>
      )
  }
}

export default EditUser;