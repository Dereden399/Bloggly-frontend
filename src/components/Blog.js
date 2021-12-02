import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

const Blog = props => {
  const id = useParams().id
  const blog = useSelector(state =>
    id !== "" ? state.blogs.find(x => x.id === id) : null
  )
  return <div>{blog.title}</div>
}

export default Blog
