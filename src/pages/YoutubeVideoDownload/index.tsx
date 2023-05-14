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

  const handleSubmit = async () => {
    if (videoUrl) {
      setIsLoading(true)
      const data = await uploadYouTubeVideo(videoUrl)

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
        <a href={downloadLink} target="blank" download={true}>
          {downloadLink}
        </a>
      )}
      {isLoading && <Loader />}
      <Button onClick={handleSubmit} title="Submit" />
    </div>
  )
}

export default YoutubeVideoDownload
