import React, { useState } from "react"
import { Link } from "react-router-dom"

import menuIcon from "../icons/utils/menuIcon.svg"

const NavigationBar = props => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav>
      {isOpen && (
        <div>
          <Link to='/blogs'>Browse blogs</Link> <Link to='/'>Main page</Link>{" "}
          <Link to='/users'>All users</Link>{" "}
          <Link to='/add-blog'>Create blog</Link>{" "}
          <Link to='/register'>Register</Link>
        </div>
      )}
      <img
        src={menuIcon}
        onClick={event => setIsOpen(!isOpen)}
        className='h-12'
      />
    </nav>
  )
}

export default NavigationBar
