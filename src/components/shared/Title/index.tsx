import React from 'react'

import styles from './styles.module.scss'

type TitleProps = {
  title: string
}

export const Title: React.FC<TitleProps> = ({ title }) => {
  return <p className={styles.title}>{title}</p>
}
