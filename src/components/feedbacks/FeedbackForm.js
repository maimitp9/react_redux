import React, { Component }  from 'react';
import { Field, reduxForm} from 'redux-form';
// import renderField from '../../components/renderField';

class FeedbackForm extends Component{

  componentDidMount(){
    const employee_id = this.props.employee_id;
    const company_id = this.props.company_id;
    this.props.initialize({ user: employee_id, company: company_id })
  }

  render(){
    const { handleSubmit, pristine, reset, submitting} = this.props;
    return(
      <tr>
        <td colSpan={6}>
          <div className="panel panel-info">
            <div className="panel-heading"> Write Feedback</div>
            <div className="panel-body">
              <form onSubmit={handleSubmit}>
                <label>Write your Feedback</label>
                <Field name="text"  component="textarea" className="form-control" /><br />
                <div>
                  <button type="submit" disabled={submitting} className="btn btn-success">Submit</button>
                  <button type="button" disabled={pristine || submitting} onClick={reset} className="btn btn-default">Clear</button>
                </div>
              </form>
            </div>
          </div>
        </td>
      </tr>
    )
  }
}

export default reduxForm({
  form: 'FeedbackForm'
})(FeedbackForm);