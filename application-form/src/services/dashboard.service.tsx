import React, { useState } from 'react'
import { useApi } from '../api'
import { UtilConsts, handleError } from '../helpers'
import { AxiosRequestConfig } from 'axios'
import { IResume } from '../interfaces/IResume'

export const useDashboardService = () => {
  const { axiosApi } = useApi()
  const { getDashboardResumes } = UtilConsts.DashboardApis()
  const [resumes, setResumes] = useState<IResume[]>([])

  const getResumes = async () => {
    try {
      const { data, headers }: AxiosRequestConfig = await axiosApi.get(
        getDashboardResumes,
      )
      setResumes(data)
    } catch (err) {
      //   handleError(err)
    }
  }

  return {
    getResumes,
    resumes,
  }
}
