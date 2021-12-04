import React from "react"
import { useNavigate } from "react-router"
import { logout } from "../reducers/userReducer"
import { connect } from "react-redux"

const UserLoginLogout = props => {
  const nav = useNavigate()
  const handleLogout = () => {
    props.logout()
    nav("/")
  }
  const handleClick = event => {
    event.preventDefault()
    if (!props.user.username) {
      nav("/login")
    } else {
      handleLogout()
    }
  }
  return (
    <button onClick={handleClick}>
      {!props.user.username ? "Log in" : "Log out"}
    </button>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { logout })(UserLoginLogout)
