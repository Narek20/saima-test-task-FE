import React, { ChangeEvent } from 'react'

import styles from './styles.module.scss'

type InputProps = {
  placeholder: string
  handleChange: (value: string, title: string) => void
  type: string
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  handleChange,
  type,
}) => {
  return (
    <input
      type={type}
      className={styles.input}
      onChange={(evt: ChangeEvent<HTMLInputElement>) =>
        handleChange(evt.target.value, placeholder.toLocaleLowerCase())
      }
      placeholder={placeholder}
    />
  )
}
