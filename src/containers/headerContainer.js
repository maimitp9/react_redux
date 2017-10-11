import Header from '../layout/Header';
import { connect } from 'react-redux';
import {logout} from '../actions/action_auth';

const mapStateToProps = (state, ownProps) => {
    return{
        authenticated: localStorage.getItem('access_token') ? true : false,
        authUser: state.authentication.loggedinUser.user        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        logout: () =>{
            localStorage.removeItem('access_token')
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);