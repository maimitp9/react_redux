import NewUser from '../../components/users/NewUser';
import { connect } from 'react-redux';
import { createUser,createUserSuccess,createUserFailure,resetNewUser } from '../../actions/action_users';

function mapStateToProps(state, newProps) {
  return{
    activeUser: state.users.newUser,
    company_id: newProps.match.params.company_id
	}
}

function matchDispatchToProps(dispatch) {
  return{
    createUser: (formData) =>{
      (dispatch(createUser(formData)).payload)
      .then((response) => {
        if (response.error) {
          dispatch(createUserFailure(response.data))
        } else {
          dispatch(createUserSuccess(response.data))
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
