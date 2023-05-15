import { AxiosInstance } from './index'

export const login = async (email: string, password: string) => {
  try {
    const data = await AxiosInstance.post('users/login', {
      email,
      password,
    })

    return data.data
  } catch (err: any) {
    return err.message
  }
}

export const register = async (email: string, password: string) => {
  try {
    const data = await AxiosInstance.post('users/register', {
      email,
      password,
    })

    return data.data
  } catch (err: any) {
    return err.message
  }
}
