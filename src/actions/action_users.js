export const showUser = (user_id) =>{
  const  user = user_data.find(function(user){
    return user.id === +user_id
  })
  console.log(user)
  return {
    type: "SHOW_USER",
    payload: user
  }
}

export const userList = () =>{
  return {
    type: "USER_LIST",
    payload: user_data
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
