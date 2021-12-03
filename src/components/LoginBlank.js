import React from "react"
import { login } from "../reducers/userReducer"
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"

const LoginBlank = props => {
  let nav = useNavigate()
  if (props.user.username && props.user.username !== "") {
    nav("/")
    return null
  }

  const handleLogin = event => {
    try {
      event.preventDefault()
      const cred = {
        username: event.target.username.value,
        password: event.target.password.value,
      }
      event.target.username.value = ""
      event.target.password.value = ""
      props.login(cred)
      nav("/")
    } catch (error) {
      console.log(error)
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
