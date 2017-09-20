import NewCompany from '../../components/companies/NewCompany';
import { connect } from 'react-redux';
import { newCompany, newCompanySuccess, newCompanyFaulire } from '../../actions/action_companies';

const mapStateToProps = (state, newProps)  =>{
  return{
    newCompanyData: state.companies.newCompany
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    newCompany: (companyData) =>{
      (dispatch(newCompany(companyData)).payload)
        .then((response) => {
          (!response.error && response.status === 200) ?
            dispatch(newCompanySuccess(response.data))
            :
            dispatch(newCompanyFaulire(response.data))
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCompany);