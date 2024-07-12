import React from 'react'
import './BackDrop.scss'

const BackDrop: React.FC = (props: { onClick: React.MouseEvent<HTMLDivElement> }) => {
  const { onClick } = props

  return (
    <div
      onClick={onClick}
      className="backdrop"
    />
  )
}

export default BackDrop