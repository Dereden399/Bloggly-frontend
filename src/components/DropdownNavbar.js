import React from "react"
import { Link } from "react-router-dom"

const DropdownNavbar = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "bg-secondary-500 flex flex-row gap-x-3 px-6 h-10 items-center"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to='/blogs' className='btn-navbar'>
        Browse blogs
      </Link>
      <Link to='/' className='btn-navbar'>
        Main page
      </Link>
      <Link to='/users' className='btn-navbar'>
        All users
      </Link>
      <Link to='/add-blog' className='btn-navbar'>
        Create blog
      </Link>
      <Link to='/register' className='btn-navbar'>
        Register
      </Link>
    </div>
  )
}

export default DropdownNavbar
