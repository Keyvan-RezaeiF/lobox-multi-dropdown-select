import React from 'react'

interface CheckProps {
  className: string;
}

const Check: React.FC<CheckProps> = props => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="check">
        <path
          id="Icon"
          d="M16.9583 5L8.1354 14.1667L4.125 10"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  )
}

export default Check
