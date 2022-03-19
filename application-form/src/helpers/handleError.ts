import { AxiosError } from 'axios'

export const handleError = (err: AxiosError<ArrayBuffer>) => {
  const { data } = err.response as any
  return data?.message
}
