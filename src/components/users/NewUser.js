import React,  {Component} from 'react';
import UserForm from './UserForm'

class NewUser extends Component{
  
  componentWillUnmount(){
    this.props.resetMe();
  }

  componentWillReceiveProps(newProps){
    if(newProps.activeUser.status){
      this.props.history.push(`/company/${this.props.company_id}/profile`);
    }
  }

  submitForm(values) {
    const formData = new FormData();
    for (const key in values) {
      if (key === 'avatar') {
        formData.append(key, values[key][0]);
      } else {
        formData.append(key, values[key]);
      }
    }
    this.props.createUser(formData)
  }

  render(){  
    const {error, loading} = this.props.activeUser;
    if(loading){
      return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
    }else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return(
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">New Employee</div>
          <div className="panel-body">
            <UserForm onSubmit={this.submitForm.bind(this)} company_id = {this.props.company_id} />
          </div>
        </div>
      </div>
    )
  }
}

export default NewUser;
