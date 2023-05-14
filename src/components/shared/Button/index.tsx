import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

type ButtonProps = {
  title?: string
  children?: ReactNode
  onClick?: () => void
  style?: React.CSSProperties
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  style,
  title,
  children,
  onClick,
  className
}) => {
  return (
    <button
      style={style}
      className={className ? styles[className] : styles.button}
      onClick={onClick || undefined}
    >
      {title || children}
    </button>
  )
}
