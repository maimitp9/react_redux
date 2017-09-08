import React,  {Component} from 'react';
import renderField from './renderField';
import {withRouter} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { newUser, newUserSuccess, newUserFailure } from '../../actions/action_users';


const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
? 'Invalid email address'
: undefined

const required = value => (value ? undefined : 'Required')
function submitForm(values, dispatch){
     return(
       (dispatch(newUser(values)).payload)
        .then((response)=>{
          if(response.error){
            dispatch(newUserFailure(response.data))
          }else{
            dispatch(newUserSuccess(response.data,values))
          }
        })
     )
}

class NewUser extends Component{

  componentWillUnmount(){
    this.props.resetMe();
  }

  componentWillReceiveProps(){
    if(this.props.newUser.status){
      this.props.history.push("/users");
    }
  }
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const {error, loading} = this.props.newUser;
    if(loading){
      return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
    }else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return(
      <div className="col-md-6">
        <form onSubmit={handleSubmit(submitForm)}>
          <Field
            name="email"
            type="email"
            label="Email"
            placeholder="Enter Email"
            component={renderField}
            validate={email} />
          <Field
            name="fname"
            type="text"
            label="First Name"
            placeholder="Enter First Name"
            component={renderField}
            validate={required} />
          <div>
            <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">Clear</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'NewUser' // a unique identifier for this form
})(withRouter(NewUser))
