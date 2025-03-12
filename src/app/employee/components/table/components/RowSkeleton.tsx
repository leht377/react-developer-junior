import React from 'react'
interface props {
  rows: number
}
const RowSkeleton: React.FC<props> = ({ rows }) => {
  return (
    <tr>
      {Array.from({ length: rows }).map((_, i) => (
        <td className='' key={i + rows}>
          <div className='border border-gray-300 bg-gray-200 animate-pulse h-11'></div>
        </td>
      ))}
    </tr>
  )
}

export default RowSkeleton
