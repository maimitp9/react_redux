import ShowCompany from '../../components/companies/ShowCompany';
import { connect } from 'react-redux';
import { fetchCompany, fetchCompanySuccess, fetchCompanyFailure } from '../../actions/action_companies';
import { deleteUser, userDeletedSuccess, userDeletedFailure } from '../../actions/action_users';


const mapStateToProps = (state, newProps) =>{
  return{
    activeCompany: state.companies.activeCompany,
    deletedUser: state.users.deletedUser
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
            dispatch(fetchCompanyFailure(response.data))
        })
    },
    deleteUser: (id, usersList) => {
      // if authentication tokan are there then check it before "dispatch deleteUser()"
      (dispatch(deleteUser(id)).payload)
        .then((response) => {
          !response.error ? dispatch(userDeletedSuccess(id, response.data, usersList)) : dispatch(userDeletedFailure(response.data))
        })
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(ShowCompany)