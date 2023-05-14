import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/shared/Button'

import styles from './styles.module.scss'

const Home = () => {
  return (
    <div className={styles.home}>
      <Link className={styles.link} to="/youtube">
        <Button title="Youtube" />
      </Link>
      <Link className={styles.link} to="/coursera">
        <Button title="Coursera" />
      </Link>
    </div>
  )
}

export default Home
