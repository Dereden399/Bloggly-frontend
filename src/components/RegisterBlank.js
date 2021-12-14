import React from "react"
import { registerNewUser } from "../reducers/userReducer"
import { useNavigate } from "react-router"
import { useDispatch } from "react-redux"

const LoginBlank = props => {
  const dispatch = useDispatch()
  const nav = useNavigate()

  const submitHandler = event => {
    event.preventDefault()
    const user = {
      username: event.target[0].value,
      password: event.target[1].value,
    }
    event.target[0].value = ""
    event.target[1].value = ""
    dispatch(registerNewUser(user)).then(res => {
      if (res) nav("/")
    })
  }

  return (
    <div>
      Register a new user:
      <form onSubmit={submitHandler}>
        <div>
          Username:
          <input placeholder='Username' />
        </div>
        <div>
          Password:
          <input placeholder='Password' type='password' />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default LoginBlank
