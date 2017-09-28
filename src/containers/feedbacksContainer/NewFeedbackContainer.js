import NewFeedback from '../../components/feedbacks/NewFeedback';
import { connect } from 'react-redux';
import {listFeedback, listFeedbackSuccess, listFeedbackFailure, createFeedback, createFeedbackSuccess, createFeedbackFailure} from '../../actions/action_feedbacks';

const mapStateToProps = (state, ownProps) => {
  return {
    employee_id: ownProps.employee_id,
    company_id: ownProps.company_id,
    feedback_list: state.feedbacks.listFeedback,
    createdFeedback: state.feedbacks.createFeedback,
    activeCompany: state.companies.activeCompany
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    listFeedback: (user_id) => {
      (dispatch(listFeedback(user_id)).payload)
        .then( (response) => {
          (!response.error && response.status === 200) ?
            dispatch(listFeedbackSuccess(response.data))
            :
            dispatch(listFeedbackFailure(response.data))
        })
    },
    createFeedback: (feedbackData, feedbacks) => {
      (dispatch(createFeedback(feedbackData)).payload)
        .then( (response) => {
          (!response.error && response.status === 200) ?
            dispatch(createFeedbackSuccess(response.data, feedbacks))
            :
            dispatch(createFeedbackFailure(response.data))
        })
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(NewFeedback)