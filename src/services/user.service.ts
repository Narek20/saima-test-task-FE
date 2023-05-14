import { AxiosInstance } from './index'

export const login = async (email: string, password: string) => {
  const data = await AxiosInstance.post('users/login', {
    email,
    password,
  }) as any

  return data.data
}

export const register = async (email: string, password: string) => {
  const data = await AxiosInstance.post('users/register', {
    email,
    password,
  }) as any

  return data.data
}
