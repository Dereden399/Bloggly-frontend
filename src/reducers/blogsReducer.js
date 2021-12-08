import blogService from "../Services/blogService"

const reducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return action.data
    case "ADD_BLOG":
      return state.concat(action.data)
    case "MODIFY_BLOG":
      const modifyedBlog = action.data
      return state.map(x => (x.id !== modifyedBlog.id ? x : modifyedBlog))
    default:
      return state
  }
}

export const initializeBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll()
    dispatch({
      type: "INIT",
      data: blogs,
    })
  }
}

export const createBlog = blog => {
  return async dispatch => {
    const addedBlog = await blogService.addBlog(blog)
    dispatch({
      type: "ADD_BLOG",
      data: addedBlog,
    })
  }
}

export const vote = blog => {
  return async dispatch => {
    const likedBlog = { ...blog, likes: blog.likes + 1 }
    await blogService.modify(likedBlog)
    dispatch({
      type: "MODIFY_BLOG",
      data: likedBlog,
    })
  }
}

export const commentBlog = (blog, comment) => {
  return async dispatch => {
    const newComments = [...blog.comments, comment]
    const newBlog = { ...blog, comments: newComments }
    await blogService.modify(newBlog)
    dispatch({
      type: "MODIFY_BLOG",
      data: newBlog,
    })
  }
}

export default reducer
