import axios from "axios"

const getAll = async () => {
  const response = await axios.get("/api/users")
  return response.data
}

const getOne = async userId => {
  const response = await axios.get(`/api/users/${userId}`)
  return response.data
}

export default { getAll, getOne }
