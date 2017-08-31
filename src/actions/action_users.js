import axios from 'axios';

export const showUser = (user_id) =>{
  const  user = user_data.find(function(user){
    return user.id === +user_id
  })
  return {
    type: "SHOW_USER",
    payload: user
  }
}

// fetch users
export const fetchUsers = () =>{
  const request = axios({
    method: 'get',
    url: `http://localhost:3000/api/countries`,
    headers: []
  });
  console.log(request);
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

const user_data = [
    {
      id: 1,
      fname: "Maimit",
      lname: "Patel"
    },
    {
      id: 2,
      fname: "Chintu",
      lname: "Patel"
    },
    {
      id: 3,
      fname: "Pihu",
      lname: "Patel"
    }
  ]
