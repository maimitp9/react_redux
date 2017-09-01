import axios from 'axios';

// fetch users
export const fetchUsers = () =>{
  const request = axios({
    method: 'get',
    url: `http://localhost:3000/api/countries`,
    headers: []
  });
  return {
    type: "FETCH_USERS",
    payload: request
  }
}

export const fetchUsersSuccess = (users) =>{
  return{
    type: "FETCH_USERS_SUCCESS",
    payload: users
  }
}

export const fetchUsersFailure = (err) =>{
  return{
    type: "FETCH_USERS_FAILURE",
    payload: err
  }
}

// fetch single user

export function fetchUser(id){
  const request = axios.get(`http://localhost:3000/api/get-country/${id}`)
  return {
    type: "FETCH_USER",
    payload: request
  }
}

export function fetchUserSuccess(activeUser){
  return {
    type: "FETCH_USER_SUCCESS",
    payload: activeUser
  }
}

export function fetchUserFailure(err){
  return {
    type: "FETCH_USET_FAILURE",
    payload: err
  }
}

export function resetActiveUser(){
  return {
    type: "RESET_ACTIVE_USER"
  }
}


export function resetDeletedUser(){
  return {
    type: "REST_DELETED_USER"
  }
}
