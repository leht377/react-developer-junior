import React from 'react'
interface props {
  rows: number
}
const RowSkeleton: React.FC<props> = ({ rows }) => {
  return (
    <tr>
      {Array.from({ length: rows }).map((_, i) => (
        <td className='' key={i + rows}>
          <div className='bg-gray-300 h-4 animate-pulse '></div>
        </td>
      ))}
    </tr>
  )
}

export default RowSkeleton
