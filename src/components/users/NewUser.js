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

class NewUser extends Component{
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <div className="col-md-6">
        <form onSubmit={handleSubmit(test)}>
          <Field
            name="email"
            type="email"
            label="Email"
            placeholder="Enter Email"
            component={renderField}
            validate={email} />
          <Field
            name="firstname"
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
})(NewUser)
