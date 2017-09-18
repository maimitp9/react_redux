import NewUser from '../../components/users/NewUser';
import { connect } from 'react-redux';
import { resetNewUser } from '../../actions/action_users';

function mapStateToProps(state) {
  return{
		newUser: state.users.newUser
	}
}
function matchDispatchToProps(dispatch) {
  return{
    resetMe: () => {
      //clean up both activeUser(currrently open) and deletedUser(open and being deleted) states
      dispatch(resetNewUser());
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(NewUser);
