import { AxiosInstance } from './index'

export const uploadYouTubeVideo = async (video_url: string) => {
  try {
    const token = localStorage.getItem('token')

    const data = await AxiosInstance.post(
      'videos/download/youtube',
      {
        video_url,
      },
      {
        headers: { 'x-access-token': token },
      }
    )

    return data.data
  } catch (err: any) {
    return err.message
  }
}

export const uploadCourseraVideo = async (video_url: string) => {
  try {
    const token = localStorage.getItem('token')

    const data = await AxiosInstance.post(
      'videos/download/coursera',
      {
        video_url,
      },
      {
        headers: { 'x-access-token': token },
      }
    )

    return data.data
  } catch (err: any) {
    return err.message
  }
}
