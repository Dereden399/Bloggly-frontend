import React from "react"
import { Link } from "react-router-dom"

const NavigationBar = props => {
  return (
    <>
      <Link to='/blogs'>Browse blogs</Link> <Link to='/'>Main page</Link>{" "}
      <Link to='/users'>All users</Link> <Link to='/add-blog'>Create blog</Link>{" "}
      <Link to='/register'>Register</Link>
    </>
  )
}

export default NavigationBar
