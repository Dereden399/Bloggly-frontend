import React, { useEffect, useState } from "react"
import userSerices from "../Services/userServices"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

const UserPage = props => {
  const [user, setUser] = useState(null)
  const id = useParams().id
  useEffect(() => {
    userSerices
      .getOne(id)
      .then(data => setUser(data))
      .catch(error => setUser(error.response.status))
  }, [id])
  if (!user) return <h1>Loading...</h1>
  if (user === 404) return <h1>No such user here...</h1>
  return (
    <div>
      <h2>{user.username}</h2>
      Has {user.blogs.length} blogs
      <br />
      Blogs:
      <ul>
        {user.blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserPage
