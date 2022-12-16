import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) {
    console.log('Error: ', error)
  }

  return Promise.reject(error)
})

const http = {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  delete: axios.delete,
}

export default http
