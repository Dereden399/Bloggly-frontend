import React from "react"
import { createBlog } from "../reducers/blogsReducer"
import { useDispatch, useSelector } from "react-redux"

const BlogForm = props => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  if (!user.username) return <div>You must be logged in!</div>

  const handleSubmit = event => {
    event.preventDefault()
    const blog = {
      title: event.target[0].value,
      author: event.target[1].value,
      url: event.target[2].value,
    }
    event.target[0].value = ""
    event.target[1].value = ""
    event.target[2].value = ""
    dispatch(createBlog(blog))
  }

  return (
    <div>
      <h2>Create a new blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title
          <input name='title'></input>
        </div>
        <div>
          Author
          <input name='author'></input>
        </div>
        <div>
          Url
          <input name='url'></input>
        </div>
        <button type='submit'>Add blog</button>
      </form>
    </div>
  )
}

export default BlogForm
