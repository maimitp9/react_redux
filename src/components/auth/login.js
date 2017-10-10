import React, { Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../components/renderField';

class Login extends Component {
  submitLoginForm(values) {
    this.props.loginUser(values);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.auth)
    if (nextProps.auth.authenticated){
      this.props.history.push('/companies')
    }
  }
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <div className="col-md-offset-3">
        <div className="col-md-6">
          <div className='panel panel-default'>
            <div className='panel-heading'>Login Form</div>
            <div className='panel-body'>
              <form onSubmit={handleSubmit(this.submitLoginForm.bind(this))} >
                <Field name='email' type='email' label='Email' placeholder='Enter e-mail address' component={renderField} validate={email} />
                <Field name='password' type='password' label='password' placeholder="Enter password" component = {renderField} validate={required} />
                <button type="submit" disabled={submitting} className="btn btn-success">Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">Clear</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
// Email validation
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? 'Invalid email address'
  : undefined

// field reqired
const required = value => (value ? undefined : 'Password field is required')


export default reduxForm({
  form: 'Login'
})(Login);