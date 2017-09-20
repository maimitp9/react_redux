import ShowCompany from '../../components/companies/ShowCompany';
import { connect } from 'react-redux';
import { fetchCompany, fetchCompanySuccess, fetchCompanyfailure } from '../../actions/action_companies';

const mapStateToProps = (state, newProps) =>{
  return{
    activeCompany: state.companies.activeCompany
  }
}

const mapDispathToProps = (dispatch) =>{
  return{
    fetchCompany: (id) =>{
      (dispatch(fetchCompany(id)).payload)
        .then( (response) => {
          (!response.error && response.status === 200) ? 
            dispatch(fetchCompanySuccess(response.data)) 
            : 
            dispatch(fetchCompanyfailure(response.data))
        })
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ShowCompany)