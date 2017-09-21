import ListCompanies from '../../components/companies/ListCompanies';
import { connect } from 'react-redux';
import { getCompanies, getCompaniesSuccess, getCompaniesFailure, deleteCompany, deleteCompanySuccess, deleteCompanyFailure} from '../../actions/action_companies';

const mapStateToProps = (state, ownProps) => {
  return {
    companiesList: state.companies.companiesList,
    deleteCompany: state.companies.deleteCompany
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCompanies);