import { Storage } from '@capacitor/storage'

// store data  e.g. token
export const setItem = async (keyName: string, keyValue: any) => {
  await Storage.set({
    key: keyName,
    value: keyValue,
  })
}

export const getItem = async (keyName: string) => {
  const { value } = await Storage.get({ key: keyName })
  return value
}

export const removeItem = async (keyName: string) => {
  await Storage.remove({ key: keyName })
}
