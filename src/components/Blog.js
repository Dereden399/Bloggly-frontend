import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"

const Blog = props => {
  const id = useParams().id
  const blog = useSelector(state =>
    id !== "" ? state.blogs.find(x => x.id === id) : null
  )
  return (
    <div>
      <h2>{blog.title}</h2> by <b>{blog.author}</b> <br />
      Has {blog.likes} like(s). <button>like</button> <br />
      You can read more on{" "}
      <a href={blog.url} target='_blank'>
        {blog.url}
      </a>{" "}
      <br />
      Written by <b>{blog.user.username}</b>
      <div>
        Comments:
        {blog.comments !== [] ? (
          blog.comments.map(com => (
            <div>
              <i>{com}</i>
            </div>
          ))
        ) : (
          <div>
            <b>This blog has not any comments yet</b>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
