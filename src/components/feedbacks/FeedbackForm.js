import React, { Component }  from 'react';
import { reset, Field, reduxForm} from 'redux-form';
// import renderField from '../../components/renderField';
import ListFeedback from './ListFeedback'

class FeedbackForm extends Component{

  componentDidMount(){
    const employee_id = this.props.employee_id;
    const company_id = this.props.company_id;
    this.props.initialize({ user: employee_id, company: company_id })
  }

  render(){

    const { handleSubmit, pristine, reset, submitting} = this.props;
    const feedback_list = this.props.feedback_list;
    const company = this.props.company;
    const feedback_id =  this.props.feedback_collapse;
    const selected_feedback = this.props.selected_feedback;
    return(
      <tr id={feedback_id} className={`collapse ${feedback_id === selected_feedback && `in`}`}>
        <td colSpan={6} >
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
          <ListFeedback company={company} feedback_list={feedback_list} />
        </td>
      </tr>
    )
  }
}

const afterSubmit = (result, dispatch) =>
dispatch(reset('FeedbackForm'));


export default reduxForm({
  form: 'FeedbackForm',
  onSubmitSuccess: afterSubmit
})(FeedbackForm);