import axios from "axios"

const baseUrl = "/api/blogs"

let token = ""

export const setToken = newToken => {
  token = "bearer " + newToken
}

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { setToken, getAll }
