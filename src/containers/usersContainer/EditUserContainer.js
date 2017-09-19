import EditUser from '../../components/users/EditUser';
import { connect } from 'react-redux';
import { fetchUser, fetchUserSuccess, fetchUserFailure, editUser, editUserSuccess, editUserFailure, resetUpdateUser } from '../../actions/action_users';

function mapStateToProps(state){
  return{
    activeUser: state.users.activeUser,
    updateUser: state.users.updateUser
  }
}

function matchDispatchToProps(dispatch){
  return{
    fetchUser: (id) => {
      (dispatch(fetchUser(id)).payload)
        .then((response) => {
          // Note: Error's "data" is in response.data (inside "response")
          // success's "data" is in response.data
          if(response && response.status !== 200){
            dispatch(fetchUserFailure(response.data));
          }
          else{
            dispatch(fetchUserSuccess(response.data));
          }
      })
    },
    editUser: (userData) =>{
      (dispatch(editUser(userData)).payload)
        .then( (response) => {
          !response.error ? dispatch(editUserSuccess(response.data)) : dispatch(editUserFailure(response.data))          
        })
    },

    resetMe: () =>{
      dispatch(resetUpdateUser())
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(EditUser);
