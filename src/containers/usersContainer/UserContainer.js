import User from '../../components/users/User';
import { connect } from 'react-redux';
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure } from '../../actions/action_users';

function mapStateToProps(state){
  return{
    usersList: state.users.usersList
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchUsers: () => {
      (dispatch(fetchUsers()).payload)
        .then((response) => {
          !response.error ? dispatch(fetchUsersSuccess(response.data)) : dispatch(fetchUsersFailure(response.data));
        })
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(User)
