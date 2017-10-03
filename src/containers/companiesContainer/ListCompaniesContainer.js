import ListCompanies from '../../components/companies/ListCompanies';
import { connect } from 'react-redux';
import { getCompanies, getCompaniesSuccess, getCompaniesFailure, deleteCompany, deleteCompanySuccess, deleteCompanyFailure, feedbackToggle} from '../../actions/action_companies';
import { listFeedbackCompany, listFeedbackSuccess, listFeedbackFailure } from '../../actions/action_feedbacks';

const mapStateToProps = (state, ownProps) => {
  return {
    companiesList: state.companies.companiesList,
    deleteCompany: state.companies.deleteCompany,
    toggle: state.companies.feedbackToggle,
    feedback_list: state.feedbacks.listFeedback
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCompanies: () => {
      (dispatch(getCompanies()).payload)
        .then( (response) => {
          (!response.error && response.status === 200) ? dispatch(getCompaniesSuccess(response.data)) : dispatch(getCompaniesFailure(response.data))
        })
    },
    deleteCompany: (id, companies) =>{
      (dispatch(deleteCompany(id)).payload)
        .then( (response) =>{
          (!response.error && response.status === 200) ?
            dispatch(deleteCompanySuccess(id, response.data, companies))
            :
            dispatch(deleteCompanyFailure(response.data))
        })
    },
    listFeedbackCompany: (company_id) =>{
      (dispatch(listFeedbackCompany(company_id)).payload)
        .then( (response) => {
          (!response.error && response.status === 200) ?
            dispatch(listFeedbackSuccess(response.data))
            :
            dispatch(listFeedbackFailure(response.data))
        })
    },
    feedbackToggle: (selected) =>{
      dispatch(feedbackToggle(selected))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCompanies);