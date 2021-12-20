import React from "react"
import { Link } from "react-router-dom"

const DropdownNavbar = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "bg-secondary-500 flex lg:flex-row lg:gap-x-3 px-6 lg:h-10 items-center flex-col gap-y-2"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link to='/blogs' className='btn-navbar-dropdown'>
        Browse blogs
      </Link>
      <Link to='/' className='btn-navbar-dropdown'>
        Main page
      </Link>
      <Link to='/users' className='btn-navbar-dropdown'>
        All users
      </Link>
      <Link to='/add-blog' className='btn-navbar-dropdown'>
        Create blog
      </Link>
      <Link to='/register' className='btn-navbar-dropdown'>
        Register
      </Link>
    </div>
  )
}

export default DropdownNavbar
