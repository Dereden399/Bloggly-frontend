import React, { useEffect, useState } from "react"
import userSerices from "../Services/userServices"
import { Link } from "react-router-dom"

const FilteredList = ({ filter, users }) => {
  const filteredUsers = users.filter(x =>
    x.username.toLowerCase().includes(filter.toLowerCase().trim())
  )
  if (filteredUsers.length === 0) return <h3>No such users here...</h3>
  return (
    <table>
      <tr>
        <td>User</td>
        <td>Blogs</td>
      </tr>
      {filteredUsers.map(user => (
        <tr>
          <td>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </td>
          <td>{user.blogs.length}</td>
        </tr>
      ))}
    </table>
  )
}

const UsersList = props => {
  const [users, setUsers] = useState(null)
  const [filter, setFilter] = useState("")
  useEffect(
    () =>
      userSerices
        .getAll()
        .then(data => setUsers(data))
        .catch(error => setUsers(null)),
    []
  )
  if (!users) return <h1>Loading</h1>
  return (
    <div>
      Browse users in Bloggly <br />
      <input
        placeholder='Write user here'
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      <FilteredList filter={filter} users={users} />
    </div>
  )
}

export default UsersList
