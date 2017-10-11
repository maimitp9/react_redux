import Login from '../../components/auth/login';
import { connect } from 'react-redux';
import { loginUser, loginUserSuccess, loginUserFailure } from '../../actions/action_auth';

const mapStateToProps = (state, ownProps) => {
   return {
      auth: state.authentication.loggedinUser
   }
}
const mapDispatchToProps = (dispatch, ownProps) => {
   return {
      loginUser: (values) => {
         (dispatch(loginUser(values)).payload) 
            .then ((response) => {
               (!response.error && response.status === 200) ? 
                  dispatch(loginUserSuccess(response.data))
               : 
                  dispatch(loginUserFailure(response.data))
            })
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)