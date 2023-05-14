import { AxiosInstance } from './index'

export const uploadYouTubeVideo = async (video_url: string) => {
  const token = localStorage.getItem('token')

  const data = (await AxiosInstance.post(
    'videos/download/youtube',
    {
      video_url,
    },
    {
      headers: { 'x-access-token': token },
    }
  )) as any
    console.log(data)
  return data.data
}
export const uploadCourseraVideo = async (video_url: string) => {
  const token = localStorage.getItem('token')

  const data = (await AxiosInstance.post(
    'videos/download/coursera',
    {
      video_url,
    },
    {
      headers: { 'x-access-token': token },
    }
  )) as any
    console.log(data)
  return data.data
}
