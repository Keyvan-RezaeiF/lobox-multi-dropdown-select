import React from 'react'

interface ChevronUpProps {
  className: string;
}

const ChevronUp: React.FC<ChevronUpProps> = props => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18 15L12 9L6 15"
        stroke="#4C4C4C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ChevronUp
