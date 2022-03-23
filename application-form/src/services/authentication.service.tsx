import React from 'react'
import { useApi } from '../api'
import { LoginForm } from '../interfaces/ILoginForm'
import { useHistory } from 'react-router-dom'
import {
  setItem,
  removeItem,
  UtilConsts,
  handleError,
  getItem,
} from '../helpers'
import { ADMIN_PANEL, APPLCATIONS, DASHBOARD } from '../router/routePaths'

export const useAuthenticationService = () => {
  const { axiosApi } = useApi()
  const { AuthenticationAPIs } = UtilConsts
  const { token, refresh_token } = UtilConsts.storageKeyNames()
  const history = useHistory()

  const login = (values: LoginForm) => {
    try {
      // eslint-disable-next-line new-cap
      axiosApi.post(AuthenticationAPIs().login, values).then((res) => {
        if (res) {
          setItem(token, res.data.token)
          setItem(refresh_token, res.data.refresh_token)
          history.push(`${ADMIN_PANEL}${APPLCATIONS}`)
        }
        return res.data
      })
    } catch (error) {}
  }

  const logout = async () => {
    // call logout api if exist, to invalidate token
    removeItem(token)
    removeItem(refresh_token)
    window.location.href = '/login'
  }

  const refreshToken = async () => {
    let config = {
      headers: {
        refreshToken: getItem(refresh_token),
      },
    }
    // call refresh token api if exist

    // const { data } = await axiosApi.put(
    //   AuthenticationAPIs().refresh_token,
    //   {},
    //   config,
    // )
    // return data
  }

  return {
    login,
    logout,
    refreshToken,
  }
}
