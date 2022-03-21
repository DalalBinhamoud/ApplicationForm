import React, { useState } from 'react'
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
import { ADMIN_PANEL, DASHBOARD } from '../router/routePaths'
import { AxiosRequestConfig } from 'axios'
import { IApplication } from '../interfaces/IApplication'
import Applications from '../components/Applications/Applications'

export const useApplicationService = () => {
  const { axiosApi } = useApi()
  const { getApplications, crudApplication } = UtilConsts.ApplicationAPIs()
  const [totalPages, setTotalPages] = useState<number>(0)
  const [applications, setApplications] = useState<IApplication[]>([])

  const postApplication = async (values: any) => {
    try {
      await axiosApi.post(crudApplication, values)
      alert('application has been submitted successfully')
      return true
    } catch (err) {
      //   handleError(err)
    }
  }

  const getpplications = async () => {
    try {
      const { data, headers }: AxiosRequestConfig = await axiosApi.get(
        getApplications,
      )
      //   setTotalPages(headers.count)
      setApplications(data)
    } catch (err) {
      //   handleError(err)
    }
  }

  const editApplication = async (values: any) => {
    try {
      await axiosApi.put(crudApplication, values)
      alert('application has been updated successfully')
    } catch (err) {
      //   handleError(err)
    }
  }

  const removeApplication = async (applicationId: number) => {
    try {
      await axiosApi.delete(`${crudApplication}?applicationId=${applicationId}`)
      alert('application has been removed successfully')
    } catch (err) {
      //   handleError(err)
    }
  }

  return {
    postApplication,
    getpplications,
    editApplication,
    removeApplication,
  }
}
