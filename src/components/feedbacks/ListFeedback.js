import React, {Component} from 'react';
import '../../css/ListFeedback.css';

class ListFeedback extends Component {
  render(){
    const { feedbacks, error, loading } = this.props.feedback_list;
    const company = this.props.company;

    if(loading){
      return <div className="container"><h3>Feedback list Loading...</h3></div>
    }else if(error){
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return(
      <div className="panel panel-default">
        <div className="panel-heading">Feedback List</div>
        <div className="panel-body">          
          <FeedbackDetails company={company} feedbacks={feedbacks} />
        </div>
      </div>
    )
  }
}

export default ListFeedback;

function FeedbackDetails(props){
  const feedbacks = props.feedbacks;
  const company = props.company;
  return(
    <div>
      {
        feedbacks.map( (feedback, index) => {
          return <FeedbackRow company={company} feedback={feedback} index={++index} key={index} />
        })
      }
    </div>
  )
}

function FeedbackRow(props){
  const feedback = props.feedback;
  const index = props.index;
  const company = props.company;
  return(
      <div className="col-md-6">
        <div className="panel panel-default">
          <div className="panel-body">
            <p>{feedback.text}</p>
            
            <div>
              {company !== undefined  ? 
                <p>
                  <strong>Company Name: </strong>{company.name}
                </p>
              :
                <div><UserInfo feedback={feedback} /></div>
              }</div>
          </div>
        </div>
      </div>
  )
}

const UserInfo = (props) => {
  const {user} = props.feedback;
  console.log()
  return(
    <div>
      { 
        user &&
        <div>
          <img src={`http://localhost:3000/uploads/${user.filename}`} alt={`${user.filename}`} className="feedback_thumb" />
          <p>{user.fname + " " + user.lname}</p>
        </div>
      }
    </div>
  )
}