import axios from 'axios';

export const loginUser = (values) => {
      var request = axios({
            method: 'post',
            url: '/auth/login',
            headers: [],
            data: values
      })
      return{
            type: 'LOGIN_USER',
            payload: request
      }
}

export const loginUserSuccess = (user) => {
      localStorage.setItem('access_token', user.token)
      return{
            type: 'LOGIN_USER_SUCCESS',
            payload: user
      }
      
}

export const loginUserFailure = (err) => {
      return{
            type: 'LOGIN_USER_FAILURE',
            payload: err
      }
}

export const logout = () => {
      return{
            type: 'LOGOUT_USER'
      }
}