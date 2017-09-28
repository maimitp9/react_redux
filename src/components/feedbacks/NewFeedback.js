import React, { Component} from 'react';
import FeedbackForm from './FeedbackForm';


class NewFeedback extends Component{

  componentDidMount(){
    const employee_id = {user_id: this.props.employee_id}
    this.props.listFeedback(employee_id)
  }
  
  submitForm = (values) =>{
    let feedbacks = this.props.feedback_list.feedbacks;
    this.props.createFeedback(values,feedbacks);
  }

  render(){
    const {feedback, error, loading} = this.props.createdFeedback;
    const employee_id = this.props.employee_id;
    const company_id = this.props.company_id;
    const feedback_list = this.props.feedback_list;
    const {company} = this.props.activeCompany;

    if(loading){
      return <div className="container"><h1>Feedback Creating...</h1><h3>Loading...</h3></div>
    }else if(error){
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return(
        <FeedbackForm employee_id={employee_id} company_id={company_id} company={company}  feedback_list={feedback_list} onSubmit={this.submitForm} />
    )
  }
}

export default NewFeedback;