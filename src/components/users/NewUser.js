import React,  {Component} from 'react';
import renderField from './renderField';
import { Field, reduxForm } from 'redux-form';

const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
? 'Invalid email address'
: undefined

const required = value => (value ? undefined : 'Required')
function test(){
  console.log("hello");
}

const phoneNumber = value =>
value && !/^(0|[1-9][0-9]{9})$/i.test(value)
  ? 'Invalid phone number, must be 10 digits'
  : undefined

class NewUser extends Component{
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <div className="col-md-6">
        <form onSubmit={handleSubmit(test)}>
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
            validate ={[required, phoneNumber]}
          />
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
})(NewUser)
