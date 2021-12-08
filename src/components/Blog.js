import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router"
import { vote, commentBlog } from "../reducers/blogsReducer"

const CommentForm = props => {
  if (!props.user.username) return <p>You must be logged in to comment</p>
  return (
    <form onSubmit={props.commentHandler}>
      <input name='comment' placeholder='Write your comment here' />
      <button type='submit'>Comment</button>
    </form>
  )
}

const Blog = props => {
  const dispatch = useDispatch()
  const id = useParams().id
  const blog = useSelector(state =>
    id !== "" ? state.blogs.find(x => x.id === id) : null
  )
  const user = useSelector(state => state.user)

  if (!blog)
    return (
      <div>
        <h1>Woops, It seems, that we don't have this blog(</h1>
      </div>
    )

  const like = () => {
    dispatch(vote(blog))
  }

  const addComment = event => {
    event.preventDefault()
    dispatch(commentBlog(blog, event.target[0].value))
    event.target[0].value = ""
  }
  return (
    <div>
      <h2>{blog.title}</h2> by <b>{blog.author}</b> <br />
      Has {blog.likes} like(s). <button onClick={like}>like</button> <br />
      You can read more on{" "}
      <a href={blog.url} target='_blank'>
        {blog.url}
      </a>{" "}
      <br />
      Written by <b>{blog.user.username}</b>
      <CommentForm user={user} commentHandler={addComment} />
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
