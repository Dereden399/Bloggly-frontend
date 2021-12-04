import React from "react"
import { Link } from "react-router-dom"

import UserLoginLogout from "./UserLoginLogout"

const NavigationBar = props => {
  return (
    <div>
      <Link to='/blogs'>Browse blogs</Link> <Link to='/'>Main page</Link>{" "}
      <UserLoginLogout />
    </div>
  )
}

export default NavigationBar
