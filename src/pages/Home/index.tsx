import React, { useState } from 'react'
import Loader from '../../components/shared/Loader'
import { Title } from '../../components/shared/Title'
import { Input } from '../../components/shared/Input'
import { Button } from '../../components/shared/Button'
import { uploadVideo } from '../../services/video.service'

import styles from './styles.module.scss'

const Home = () => {
  const [videoUrl, setVideoUrl] = useState('')
  const [downloadLink, setDownloadLink] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    if (videoUrl) {
      setIsLoading(true)
      const data = await uploadVideo(videoUrl)
      
      if (data.data) {
        setIsLoading(false)
        setDownloadLink(data.data)
      }
    }
  }

  return (
    <div className={styles.home}>
      <Title title="Create A Download Link" />
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

export default Home
