import axios from 'axios'
import { getItem, removeItem, UtilConsts } from '../helpers'

const useApi = () => {
  const { token } = UtilConsts.storageKeyNames()
  const axiosApi = axios.create({
    // baseURL: process.env.REACT_APP_BACKEND_URL, //fake backend url
    baseURL: 'https://reqres.in/api/',
  })
  // // loder element
  // const loaderElement = document.getElementById('loader_div')!
  // const showLoader = () => {
  //   loaderElement.style.display = 'block'
  // }
  // const hideLoader = () => {
  //   loaderElement.style.display = 'none'
  // }

  axiosApi.interceptors.request.use(
    (config: any) => {
      config.headers.common['Authorization'] = 'Bearer ' + getItem(token)
      config.headers.common['Accept-Language'] = 'en'
      // Do something before request is sent
      // showLoader()
      return config
    },
    (error) => {
      // Do something with request error
      // hideLoader()
      removeItem(token)
      window.location.href = '/login'
      return Promise.reject(error)
    },
  )
  axiosApi.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of
      // Do something with response data
      // hideLoader()
      return response
    },
    (error) => {
      const status =
        error.status || (error.response ? error.response.status : 0)
      // Any status codes that falls outside the range
      // Do something with response error
      if (status === 403 || status === 401) {
        removeItem(token)
        window.location.href = '/login'
      }
      // hideLoader()
      return Promise.reject(error)
    },
  )
  return { axiosApi }
}

export { useApi }
