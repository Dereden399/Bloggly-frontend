import React from "react"
import { login } from "../reducers/userReducer"
import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

const LoginBlank = ({ user, login }) => {
  if (user.username && user.username !== "") {
    return <Navigate to='/' />
  }

  const handleLogin = event => {
    event.preventDefault()
    const cred = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    event.target.username.value = ""
    event.target.password.value = ""
    login(cred)
    if (user?.username !== "") {
      return <Navigate to='/' />
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          username:
          <input type='text' name='username' />
        </div>
        <div>
          password:
          <input type='password' name='password' />
        </div>
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { login })(LoginBlank)
