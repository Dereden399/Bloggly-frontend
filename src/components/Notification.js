import React from "react"
import { useSelector } from "react-redux"

const Notification = props => {
  const notif = useSelector(state => state.notification)
  if (notif.message === "" || notif.type === "") {
    return null
  }
  return <div className={notif.type}>{notif.message}</div>
}

export default Notification
