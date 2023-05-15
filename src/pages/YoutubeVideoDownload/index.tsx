import { useState } from 'react'
import Loader from '../../components/shared/Loader'
import { Title } from '../../components/shared/Title'
import { Input } from '../../components/shared/Input'
import { Button } from '../../components/shared/Button'
import { uploadYouTubeVideo } from '../../services/video.service'

import styles from './styles.module.scss'

const YoutubeVideoDownload = () => {
  const [videoUrl, setVideoUrl] = useState('')
  const [downloadLink, setDownloadLink] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async () => {
    if (videoUrl) {
      if(!videoUrl.includes("https://www.youtube.com/watch")) {
        setErrorMessage("It is not a valid Youtube URL")
        return
      }

      setErrorMessage('')
      setIsLoading(true)
      const data = await uploadYouTubeVideo(videoUrl)

      if (!data.success) {
        setErrorMessage(data.message)
        return
      }

      if (data.data) {
        setIsLoading(false)
        setDownloadLink(data.data)
      }
    }
  }

  return (
    <div className={styles.container}>
      <Title title="Create A Youtube Download Link" />
      <Input
        type="input"
        handleChange={setVideoUrl}
        placeholder="Put video link"
      />
      {downloadLink && !isLoading && (
        <a href={downloadLink} target="blank" download>
          {downloadLink}
        </a>
      )}
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {isLoading && !errorMessage && <Loader />}
      <Button onClick={handleSubmit} title="Submit" />
    </div>
  )
}

export default YoutubeVideoDownload
