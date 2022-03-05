import axios from 'axios'
import qs from 'qs'

// const baseURL = '/'
// const baseURLMock = 'http://localhost:8080/'
const baseURL = 'http://localhost:8080'

export const http = axios.create({
  baseURL: baseURL,
  paramsSerializer: params => {
    return qs.stringify(params /*, {encodeValuesOnly: true} */)
  },
  // withCredentials: true,
  // timeout: 10000,
  // headers: {
  //   "Access-Control-Allow-Origin": "*",
  //   Authorization: 'Bearer {token}',
  // }
})
