import EditCompany from '../../components/companies/EditCompany';
import { connect } from 'react-redux';
import { fetchCompany, fetchCompanySuccess, fetchCompanyFailure, editCompany, editCompanySuccess, editCompanyFailure, resetEditCompany } from '../../actions/action_companies';

const mapStateToProps = (state, newProps) =>{
  return{
    company_id: newProps.match.params.id,
    activeCompany: state.companies.activeCompany,
    editCompanyData: state.companies.editCompany
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    fetchCompany: (id) =>{
      (dispatch(fetchCompany(id)).payload)
        .then( (response) => {
          (!response.error && response.status === 200) ?
            dispatch(fetchCompanySuccess(response.data))
            :
            dispatch(fetchCompanyFailure(response.data))
        })
    },
    editCompany: (companyData) => {
      (dispatch(editCompany(companyData)).payload)
        .then( (response) => {
          (!response.error && response.status === 200) ?
            dispatch(editCompanySuccess(response.data))
            :
            dispatch(editCompanyFailure(response.data))
        })
    },
    resetMe: () =>{
      dispatch(resetEditCompany())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);