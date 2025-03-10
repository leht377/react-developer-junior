import React from 'react'

interface SVGIconProps {
  name: 'search' | 'close' | 'arrowUp' | 'arrowDown' | 'calculator' // Agrega más nombres de íconos según necesites
  size?: number
  color?: string
  className?: string
}

const icons = {
  search: (
    <path
      d='M11 19a8 8 0 100-16 8 8 0 000 16zm9-1.5l-3.5-3.5'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  ),
  close: (
    <path
      d='M6 6l12 12M18 6l-12 12'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  ),
  arrowUp: (
    <path
      d='M12 19V5M5 12l7-7 7 7'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  ),
  arrowDown: (
    <path
      d='M12 5v14m7-7l-7 7-7-7'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  ),
  calculator: (
    <>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-10 15a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-8 -4a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm4 0a1 1 0 0 0 -1 1l.007 .127a1 1 0 0 0 1.993 -.117l-.007 -.127a1 1 0 0 0 -.993 -.883zm-1 -7h-6a2 2 0 0 0 -2 2v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-1a2 2 0 0 0 -2 -2z' />
    </>
  )
}

const SVGIcon: React.FC<SVGIconProps> = ({
  name,
  size = 24,
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg
      className={`w-${size} h-${size} ${className}`}
      fill='none'
      viewBox='0 0 24 24'
      width={size}
      height={size}
      stroke={color}
    >
      {icons[name]}
    </svg>
  )
}

export default SVGIcon
