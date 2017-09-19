import React,  {Component} from 'react';
import renderField from './renderField';
import {withRouter} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined

const required = value => (value ? undefined : 'Required')

const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

const initialValues = {
  company: '59bfa6845fa2ac768ef4a307',
  };


class NewUser extends Component{
  constructor(){
    super();
    this.state = {avatar: "" }
  }
  componentWillUnmount(){
    this.props.resetMe();
  }

  componentWillReceiveProps(newProps){
    if(newProps.activeUser.status){
      this.props.history.push("/users");
    }
  }

  handleChange(event){
    this.setState({
      avatar: this.refs.avatar.files
    })
  }

  submitForm(values, dispatch) {
    values["avatar"]= this.state.avatar
    const formData = new FormData();
    for (const key in values) {
      if (key === 'avatar') {
        formData.append(key, values[key][0]);
      } else {
        formData.append(key, values[key]);
      }
    }
    this.props.newUser(formData)
  }

  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    const {error, loading} = this.props.activeUser;
    if(loading){
      return <div className="container"><h1>Users</h1><h3>Loading...</h3></div>
    }else if (error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }
    return(
      <div className="col-md-6">
        <form encType="multipart/form-data" onSubmit={handleSubmit(this.submitForm.bind(this))}>
          <Field
            name="fname"
            type="text"
            label="First Name"
            placeholder="Enter First Name"
            component={renderField}
            validate={required} />
          <Field
            name="lname"
            type="text"
            label="Last Name"
            placeholder="Enter Last Name"
            component={renderField}
            validate={required} />
          <Field
            name="email"
            type="email"
            label="Email"
            placeholder="Enter Email"
            component={renderField}
            validate={email} />
          <input
            type="file"
            ref = "avatar"
            onChange= {this.handleChange.bind(this)}
          />
          <div>
            <label>Sex</label>
            <div>
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="1"
                />{' '}
                Male
              </label> <br/>
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="0"
                />{' '}
                Female
              </label>
            </div>
          </div>
          <Field
            name="phone"
            type="number"
            label="Phone Nunber"            
            placeholder="Enter your Phone Number" 
            component={renderField}
            validate ={[required, phoneNumber]}/>
          <div>
            <label>Address</label>
            <div>
              <Field name="address" component="textarea" className='form-control' /> <br/>
            </div>
          </div>
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
  form: 'NewUser', // a unique identifier for this form
  initialValues,
  // fields: ['avatar'],
})(withRouter(NewUser))
