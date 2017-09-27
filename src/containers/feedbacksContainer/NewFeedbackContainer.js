import NewFeedback from '../../components/feedbacks/NewFeedback';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    employee_id: ownProps.employee_id,
    company_id: ownProps.company_id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch1: () => {
      dispatch()
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(NewFeedback)