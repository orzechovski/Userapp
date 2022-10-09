import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const create = async (newUser) => {
  const response = await axios.post(baseUrl, newUser)
  return response.data
}

const update = async (id, newUser) => {
  const response = await axios.put(`${baseUrl}/${id}`, newUser)
  return response.data
}

const del = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.data
}

export { getAll, create, update, del }
