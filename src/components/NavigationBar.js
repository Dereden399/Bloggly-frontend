import React from "react"

import menuIcon from "../icons/utils/menuIcon.svg"
import mainIcon from "../icons/Bloggly.svg"
import UserHeader from "./UserHeader"

const NavigationBar = ({ toggle }) => {
  return (
    <nav className='bg-secondary-500 flex items-center justify-between px-5 h-14'>
      <div className='h-full flex flex-row items-center gap-x-1'>
        <img src={menuIcon} onClick={toggle} className='h-full' />
        <img src={mainIcon} className='h-full' />
      </div>
      <UserHeader />
    </nav>
  )
}

export default NavigationBar
