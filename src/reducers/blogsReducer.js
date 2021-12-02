import blogService from "../Services/blogService"

const reducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return action.data
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

export default reducer
