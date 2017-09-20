import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from '../../components/renderField';

class CompanyForm extends Component{
  render(){
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return(
      <div className="col-md-6">
        <div className="panel panel-primary">
          <div className="panel-heading">New Company</div>
          <div className="panel-body">
          <form onSubmit={handleSubmit}>
            <Field
              name="name"
              type="text"
              label="Cpmpany Name"
              placeholder="Enter Company Name"
              component={renderField}
              validate={required} />
            <Field
              name="numberOfEmployees"
              type="number"
              label="Total Employees"
              placeholder="Enter Number of Employees"
              component={renderField}
              validate={[required, number]} />
            <div>
              <button type="submit" disabled={submitting} className="btn btn-success">Submit</button>
              <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">Clear</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

//
// ─── VALIDATION ─────────────────────────────────────────────────────────────────
//

// field reqired
const required = value => (value ? undefined : 'Required')

// phone validation
const number = value =>
  value && !/^(0|[0-9])$/i.test(value)
    ? undefined : 'Only Numbers are allowed.'

// ────────────────────────────────────────────────────────────────────────────────


export default reduxForm({
  form: 'CompanyForm'
})(CompanyForm)