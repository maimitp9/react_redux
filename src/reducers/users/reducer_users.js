const users = (state = [], action) => {
  switch (action.type) {
    case "USER_LIST":
      return action.payload
      break;
    case "SHOW_USER":
      return action.payload
      break;
    default:
      return state;
  }
}
export default users;
