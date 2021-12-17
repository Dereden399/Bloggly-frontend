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
    <div className='flex flex-row items-center gap-x-2'>
      {props.user.username && (
        <div>
          <b>{props.user.username}</b>
        </div>
      )}
      <div className='flex flex-col gap-y-1'>
        {props.user.username && (
          <div>
            <button
              onClick={() => nav(`/users/${props.user.userId}`)}
              className='bg-primaryWhite hover:bg-secondaryWhite rounded-full font-bold px-1'
            >
              Your profile
            </button>
          </div>
        )}
        <div>
          <button
            onClick={handleClick}
            className='bg-primaryWhite hover:bg-secondaryWhite rounded-full font-bold px-1'
          >
            {!props.user.username ? "Log in" : "Log out"}
          </button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, { logout })(UserLoginLogout)
