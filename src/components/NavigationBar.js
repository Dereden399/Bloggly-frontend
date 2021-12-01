import React from "react"
import { Link } from "react-router-dom"

const NavigationBar = props => {
  return (
    <div>
      <Link to='/blogs'>Browse blogs</Link> <Link to='/'>Main page</Link>{" "}
      <Link to='/login'>Log in</Link>
    </div>
  )
}

export default NavigationBar
