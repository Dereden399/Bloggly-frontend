import React from "react"
import { useSelector } from "react-redux"
import { BadgeCheckIcon, XCircleIcon } from "@heroicons/react/outline"

const NotificationBase = ({ text }) => (
  <p className='font-main font-bold text-2xl md:text-4xl text-center'>{text}</p>
)

const Notification = props => {
  const notif = useSelector(state => state.notification)
  if (notif.message === "" || notif.type === "") {
    return null
  }
  if (notif.type === "success")
    return (
      <div className='absolute my-10 w-full grid justify-center z-10'>
        <div
          className={
            notif.shouldEnd
              ? "bg-green-500 border-4 border-green-900 border-double shadow-2xl flex flex-row items-center rounded-full p-1 md:p-2 animate-alertEnd"
              : "bg-green-500 border-4 border-green-900 border-double shadow-2xl flex flex-row items-center rounded-full p-1 md:p-2 animate-alertStart"
          }
        >
          <BadgeCheckIcon className='w-14 h-14 md:w-20 md:h-20' />
          <NotificationBase text={notif.message} />
        </div>
      </div>
    )
  else if (notif.type === "error")
    return (
      <div className='absolute my-10 w-full grid justify-center z-10'>
        <div
          className={
            notif.shouldEnd
              ? "bg-red-400 border-4 border-red-900 border-double shadow-2xl flex flex-row items-center rounded-full p-1 md:p-2 animate-alertEnd"
              : "bg-red-400 border-4 border-red-900 border-double shadow-2xl flex flex-row items-center rounded-full p-1 md:p-2 animate-alertStart"
          }
        >
          <XCircleIcon className='w-14 h-14 md:w-20 md:h-20' />
          <NotificationBase text={notif.message} />
        </div>
      </div>
    )
  else return null
}

export default Notification
