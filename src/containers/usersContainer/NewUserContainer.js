import NewUser from '../../components/users/NewUser';
import { connect } from 'react-redux';
import { newUser,newUserSuccess,newUserFailure,resetNewUser } from '../../actions/action_users';

function mapStateToProps(state) {
  return{
		activeUser: state.users.newUser
	}
}
function matchDispatchToProps(dispatch) {
  return{
    newUser: (formData) =>{
      (dispatch(newUser(formData)).payload)
      .then((response) => {
        if (response.error) {
          dispatch(newUserFailure(response.data))
        } else {
          dispatch(newUserSuccess(response.data))
        }
      })
    },
    resetMe: () => {
      //clean up both activeUser(currrently open) and deletedUser(open and being deleted) states
      dispatch(resetNewUser());
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(NewUser);
