import loginService from "../Services/login"
import { setToken } from "../Services/blogService"

const reducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.data
    case "REMOVE_USER":
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
    window.localStorage.setItem("loggedUser", JSON.stringify(loginResponse))
  }
}

export const checkUser = () => {
  return async dispatch => {
    const userJSON = window.localStorage.getItem("loggedUser")
    console.log(userJSON)
    if (userJSON) {
      const user = JSON.parse(userJSON)
      const userCred = {
        username: user.username,
        userId: user.id,
      }
      dispatch({
        type: "SET_USER",
        data: userCred,
      })
      setToken(user.token)
    }
  }
}

export const logout = () => {
  return async dispatch => {
    setToken("")
    window.localStorage.removeItem("loggedUser")
    dispatch({ type: "REMOVE_USER" })
  }
}

export default reducer
