import axios from 'axios';

//
// ─── FETCH USERS ────────────────────────────────────────────────────────────────
//
export const fetchUsers = () =>{
  const request = axios({
    method: 'get',
    url: `/users`,
    headers: {}
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

//
// ─── CREATE USER ────────────────────────────────────────────────────────────────
//
export function createUser(data){
	const request = axios({
    method: 'post',
    url: '/user/create',
    headers: {},
    data: data
  });
  return{
    type: "NEW_USER",
    payload: request,
  }
}

export function createUserSuccess(response){
  return{
    type: "NEW_USER_SUCCESS",
    payload: response
  }
}

export function createUserFailure(err){
  return{
    type: "NEW_USER_FAILURE",
    payload: err
  }
}

//
// ─── FETCH SINGLE USER ──────────────────────────────────────────────────────────
//
export function fetchUser(id){
  const request = axios.get(`/user/${id}/profile`)
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

//
// ─── UPDATE USER ────────────────────────────────────────────────────────────────
//
export function editUser(userData){
  const request = axios({
    method: 'post',
    url: `/user/${userData.get('_id')}/update`,
    header: {},
    data: userData
  })
  return{
    type: 'USER_UPDATE',
    payload: request
  }
}

export function editUserSuccess(userData){
  return{
    type: 'USER_UPDATE_SUCCESS',
    payload: userData
  }
}

export function editUserFailure(err){
  return{
    type: 'USER_UPDATE_FAILURE',
    payload: err
  }
}

export function resetUpdateUser(){
  return{
    type: "RESET_UPDATE_USER"
  }
}

//
// ─── DELETE USER ────────────────────────────────────────────────────────────────
//
export function deleteUser(id){
  const request = axios({
    method: 'delete',
    url: `/user/${id}/delete`,
    headers: {}
  })
  return{
    type: "DELETE_USER",
    payload: request
  }
}

export function userDeletedSuccess(id,deletedUser,usersList){
  let user = usersList.find(function(user){
      return user._id === id
    })
  usersList.splice(usersList.indexOf(user),1)
  return {
    type: "USER_DELETED_SUCCESS",
    payload: deletedUser
  }
}

export function userDeletedFailure(err){
  return {
    type: "USER_DELETED_FAILURE",
    payload: err
  }
}

//
// ─── RESET USER ─────────────────────────────────────────────────────────────────
//
export function resetNewUser(){
  return {
    type: "RESET_NEW_USER"
  }
}

//
// ─── RESET ACTIVEUSER ───────────────────────────────────────────────────────────
//
export function resetActiveUser(){
  return {
    type: "RESET_ACTIVE_USER"
  }
}

//
// ─── RESET DELETED USER ───────────────────────────────────────────────────────────
//
export function resetDeletedUser(){
  return {
    type: "RESET_DELETED_USER"
  }
}