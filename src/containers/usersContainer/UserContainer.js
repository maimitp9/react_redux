import User from '../../components/users/User';
import { connect } from 'react-redux';
import { fetchUsers, fetchUsersSuccess, fetchUsersFailure, deleteUser, userDeletedSuccess, userDeletedFailure, resetDeletedUser } from '../../actions/action_users';

function mapStateToProps(state){
  return{
    usersList: state.users.usersList,
    deletedUser: state.users.deletedUser
  }
}

function matchDispatchToProps(dispatch){
  return {
    fetchUsers: () => {
      (dispatch(fetchUsers()).payload)
        .then((response) => {
          !response.error ? dispatch(fetchUsersSuccess(response.data)) : dispatch(fetchUsersFailure(response.data));
        })
    },
    deleteUser: (id,usersList) => {
      // if authentication tokan are there then check it before "dispatch deleteUser()"
      (dispatch(deleteUser(id)).payload)
        .then((response) =>{
          !response.error ? dispatch(userDeletedSuccess(id,response.data,usersList)) : dispatch(userDeletedFailure(response.data))
        })
    },
    resetDeletedUser: () => {
      //clean up both activeUser(currrently open) and deletedUser(open and being deleted) states
      dispatch(resetDeletedUser());
    }
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(User)
