import loginService from "../Services/login"
import { setToken } from "../Services/blogService"

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.data
    case "DELETE_USER":
      return {}
    default:
      return state
  }
}

export const login = cred => {
  return async dispatch => {
    const loginResponse = await loginService.login(cred)
    const user = {
      username: loginResponse.username,
      userId: loginResponse.id,
    }
    dispatch({
      type: "SET_USER",
      data: user,
    })
    setToken(loginResponse.token)
  }
}

export default reducer
