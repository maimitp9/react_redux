import ListCompanies from '../../components/companies/ListCompanies';
import { connect } from 'react-redux';
import { getCompanies, getCompaniesSuccess, getCompaniesFailure} from '../../actions/action_companies';

const mapStateToProps = (state, ownProps) => {
  return {
    companiesList: state.companies.companiesList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCompanies: () => {
      (dispatch(getCompanies()).payload)
        .then( (response) => {
          (!response.error && response.status === 200) ? dispatch(getCompaniesSuccess(response.data)) : dispatch(getCompaniesFailure(response.data))
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCompanies);