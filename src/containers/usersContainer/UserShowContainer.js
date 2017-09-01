import ShowUser from '../../components/users/ShowUser';
import { connect } from 'react-redux';
import { fetchUser, fetchUserSuccess, fetchUserFailure, resetActiveUser, resetDeletedUser } from '../../actions/action_users';

function mapStateToProps(state, ownProps){
  return{
    activeUser: state.users.activeUser,
    id: ownProps.userId
  }
}

function matchDispatchToProps(dispatch){
  return {
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
    resetMe: () => {
      //clean up both activeUser(currrently open) and deletedUser(open and being deleted) states
      dispatch(resetActiveUser());
      dispatch(resetDeletedUser());
    }
  }
}
export default connect(mapStateToProps,matchDispatchToProps)(ShowUser)
