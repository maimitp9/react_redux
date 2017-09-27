import React, { Component} from 'react';
import FeedbackForm from './FeedbackForm';

class NewFeedback extends Component{

  submitForm = (values) =>{
  }

  render(){
    const employee_id = this.props.employee_id;
    const company_id = this.props.company_id;
    return(
        <FeedbackForm employee_id={employee_id} company_id={company_id} onSubmit={this.submitForm}/>
    )
  }
}

export default NewFeedback;