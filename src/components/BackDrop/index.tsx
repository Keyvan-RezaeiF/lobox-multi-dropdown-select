import React from 'react'
import styles from './styles.module.scss'

interface BackDropProps {
  onClick: React.MouseEventHandler<HTMLDivElement>
}

const BackDrop: React.FC<BackDropProps> = (props) => {
  const { onClick } = props

  return (
    <div
      onClick={onClick}
      className={styles.backdrop}
    />
  )
}

export default BackDrop