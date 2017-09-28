import React, {Component} from 'react';


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
      <table className="table table-hover">
        <thead>
          <tr>
            <th>#</th>
            <th>Feedback</th>
            <th>Company Name</th>
          </tr>
        </thead>
          {
            feedbacks.map( (feedback, index) => {
              return <FeedbackRow company={company} feedback={feedback} index={++index} key={index} />
            })
          }
      </table>
    </div>
  )
}

function FeedbackRow(props){
  const feedback = props.feedback;
  const index = props.index;
  const company = props.company;
  return(
    <tbody>
      <tr>
        <td>{index}</td>
        <td>{feedback.text}</td>
        <td>{company.name}</td>                
      </tr>
    </tbody>
  )
}